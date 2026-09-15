import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { when } from 'lit-html/directives/when.js';
import { within } from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-empty-state';
import { fileIcon, getButtons, searchIcon } from './utils';

const headerOptions = ['search', 'file'] as const;

const headerContent = {
	search: searchIcon(),
	file: fileIcon(),
};

const getHeaderContent = (key: keyof typeof headerContent) =>
	headerContent[key];

type Args = {
	title: string;
	description: string;
	header: keyof typeof headerContent;
	buttons: number;
};

const meta: Meta<Args> = {
	title: 'CosmozEmptyState',
	component: 'cosmoz-empty-state',
	tags: ['autodocs'],
	argTypes: {
		header: {
			control: 'select',
			options: headerOptions,
			description: 'Example html rendered inside the header slot',
		},
		title: {
			control: 'text',
			description: 'Example text rendered inside the title slot',
		},
		description: {
			control: 'text',
			description: 'Example text rendered inside the default slot',
		},
		buttons: {
			control: { type: 'range', min: 0, max: 4, step: 1 },
			description: 'Example buttons rendered inside the buttons slot',
		},
	},
	args: {
		header: 'search',
		title: 'No results found',
		description:
			'Your search “Landing page design” did not match any projects. Please try again.',
		buttons: 2,
	},
};

export default meta;

export const Default: StoryObj<Args> = {
	render: (args) =>
		html`<cosmoz-empty-state>
			${when(args.header, () => getHeaderContent(args.header))}
			<h1 slot="title">${args.title}</h1>
			<p>${args.description}</p>
			${when(args.buttons, () => getButtons(args.buttons))}
		</cosmoz-empty-state>`,

	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('Assigns header content to the header slot', async () => {
			const header = canvas.getByShadowRole('img');
			await waitFor(() =>
				expect(header.assignedSlot).toHaveAttribute('name', 'header'),
			);
		});

		await step('Assigns title content to the title slot', async () => {
			const title = canvas.getByShadowRole('heading');
			await waitFor(() =>
				expect(title.assignedSlot).toHaveAttribute('name', 'title'),
			);
		});

		await step('Assigns children to the default slot', async () => {
			const description = canvas.getByShadowRole('paragraph');
			await waitFor(() =>
				expect(description.assignedSlot).toHaveProperty('name', ''),
			);
		});

		await step('Assigns button content to the buttons slot', async () => {
			const buttons = canvas.getAllByShadowRole('button');
			for (const button of buttons) {
				await waitFor(() =>
					expect(button.assignedSlot).toHaveAttribute('name', 'buttons'),
				);
			}
		});
	},
};
