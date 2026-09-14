import { html } from '@pionjs/pion';
import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-empty-state';

const meta: Meta = {
	title: 'CosmozEmptyState',
	component: 'cosmoz-empty-state',
};

export default meta;

export const Default: StoryObj = {
	render: () => html`<cosmoz-empty-state>No items yet.</cosmoz-empty-state>`,
};
