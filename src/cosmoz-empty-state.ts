import { component, html } from '@pionjs/pion';

const CosmozEmptyState = () => html`<slot></slot>`;

customElements.define(
	'cosmoz-empty-state',
	component(CosmozEmptyState),
);

export { CosmozEmptyState };
