import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import { when } from 'lit-html/directives/when.js';
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
			${when(
				args.header,
				() => html` <div slot="header">${getHeaderContent(args.header)}</div> `,
			)}
			<h1 slot="title">${args.title}</h1>
			<p>${args.description}</p>
			${when(args.buttons, () => getButtons(args.buttons))}
		</cosmoz-empty-state>`,
};
