import { normalize } from '@neovici/cosmoz-tokens/normalize';
import { component, css, html } from '@pionjs/pion';

const CosmozEmptyState = () => html`
	<header part="header">
		<slot name="header"></slot>
	</header>
	<main part="main">
		<div class="title" part="title">
			<slot name="title"></slot>
		</div>
		<slot></slot>
	</main>
	<footer part="footer">
		<div class="buttons" part="buttons">
			<slot name="buttons"></slot>
		</div>
	</footer>
`;

const styles = css`
	:host {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: calc(var(--cz-spacing) * 8);
		width: 100%;
		max-width: 32rem;
		margin-inline: auto;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
	}

	::slotted(*) {
		margin: 0;
		padding: 0;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		color: var(--cz-color-text-tertiary);
		text-align: center;
	}

	slot[name='title']::slotted(*) {
		margin: 0;
		padding: 0;
		font-size: var(--cz-text-lg);
		line-height: var(--cz-text-lg-line-height);
		font-weight: var(--cz-font-weight-medium);
		color: var(--cz-color-text-primary);
		text-align: center;
	}

	.buttons {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: calc(var(--cz-spacing) * 3);
	}
`;

customElements.define(
	'cosmoz-empty-state',
	component(CosmozEmptyState, { styleSheets: [normalize, styles] }),
);

export { CosmozEmptyState };
