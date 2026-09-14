import { html, Renderable } from '@pionjs/pion';
import './buttons.css';

export const searchIcon = () =>
	html` <div
		style="border-radius: var(--cz-radius-md);
    border: 1px solid var(--cz-color-border-secondary);
    height: calc(var(--cz-spacing) * 12);
    width: calc(var(--cz-spacing) * 12);
    display: flex;
    align-items: center;
    justify-content: center;"
	>
		<svg
			viewBox="0 0 24 24"
			preserveAspectRatio="xMidYMid meet"
			focusable="false"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="search-lg-icon "
			width="24"
			height="24"
		>
			<path
				d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
			></path>
		</svg>
	</div>`;

export const fileIcon = () =>
	html` <svg
		width="40"
		height="40"
		fill="none"
		viewBox="0 0 40 40"
		aria-hidden="true"
		class="size-10 drop-shadow-sm"
	>
		<path
			fill="#7F56D9"
			d="M4 4a4 4 0 0 1 4-4h16l12 12v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"
		></path>
		<path fill="#fff" d="m24 0 12 12h-8a4 4 0 0 1-4-4z" opacity="0.3"></path>
		<path
			stroke="#fff"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="m20.667 20.667-.744-1.488c-.214-.428-.321-.642-.48-.798a1.3 1.3 0 0 0-.499-.308c-.211-.073-.45-.073-.93-.073h-2.547c-.747 0-1.12 0-1.406.145-.25.128-.454.332-.582.583-.146.285-.146.659-.146 1.405v.534m0 0h10.134c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.427.218.988.218 2.108V26.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218h-6.934c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874c-.218-.428-.218-.988-.218-2.108z"
		></path>
	</svg>`;

const makeButton = (label: string, variant: 'primary' | 'secondary') => html`
	<button
		class="empty-state-story-button"
		data-variant=${variant}
		slot="buttons"
	>
		Button ${label}
	</button>
`;

export const getButtons = (nr: number = 2) => {
	const buttons: Renderable[] = [];
	for (let i = 0; i < nr; i++) {
		buttons.push(makeButton(String(i + 1), i === 0 ? 'primary' : 'secondary'));
	}
	return buttons;
};
