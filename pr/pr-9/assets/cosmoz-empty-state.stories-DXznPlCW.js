import{B as _,u as B,e as y,D as E,f as u,g as H}from"./iframe-BIUxA-5l.js";import"./preload-helper-PPVm8Dsz.js";const w=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},O=t=>t?.map(e=>typeof e=="string"?w(e):e),P=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),x=P,j=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function $(t){class e extends _{frag;renderResult;constructor(o,h,p){super(o,p||h),this.frag=h}commit(o){this.renderResult=t(o,this.frag)}}function s(n,o,h){const p=(h||o||{}).baseElement||HTMLElement,{observedAttributes:S=[],useShadowDOM:z=!0,shadowRootInit:A={},styleSheets:R}=h||o||{},f=O(n.styleSheets||R);class b extends p{_scheduler;static get observedAttributes(){return n.observedAttributes||S||[]}constructor(){if(super(),z===!1)this._scheduler=new e(n,this);else{const a=this.attachShadow({mode:"open",...A});f&&(a.adoptedStyleSheets=f),this._scheduler=new e(n,a,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(a,l,i){if(l===i)return;let r=i===""?!0:i;Reflect.set(this,j(a),r)}}function C(c){let a=c,l=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return a},set(i){l&&a===i||(l=!0,a=i,this._scheduler&&this._scheduler.update())}})}const k=new Proxy(p.prototype,{getPrototypeOf(c){return c},set(c,a,l,i){let r;return a in c?(r=Object.getOwnPropertyDescriptor(c,a),r&&r.set?(r.set.call(i,l),!0):(Reflect.set(c,a,l,i),!0)):(typeof a=="symbol"||a[0]==="_"?r={enumerable:!0,configurable:!0,writable:!0,value:l}:r=C(l),Object.defineProperty(i,a,r),r.set&&r.set.call(i,l),!0)}});return Object.setPrototypeOf(b.prototype,k),b}return s}function F(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(y,this)}disconnectedCallback(){this.removeEventListener(y,this)}handleEvent(n){const{detail:o}=n;o.Context===s&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let o of this.listeners)o(n)}get value(){return this._value}},Consumer:t(function({render:n}){const o=B(s);return n(o)},{useShadowDOM:!1}),defaultValue:e};return s}}function M({render:t}){const e=$(t),s=F(e);return{component:e,createContext:s}}const{component:D}=M({render:E});function v(t,e,s){return t?e(t):s?.(t)}const T=w(x`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`),U=()=>u`
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
`,L=x`
	:host {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--cosmoz-empty-state-gap, calc(var(--cz-spacing) * 8));
		width: 100%;
		max-width: var(--cosmoz-empty-state-max-width, 32rem);
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
`;customElements.define("cosmoz-empty-state",D(U,{styleSheets:[T,L]}));const I=()=>u` <div
		slot="header"
		role="img"
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
	</div>`,Y=()=>u` <svg
		slot="header"
		role="img"
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
	</svg>`,q=(t,e)=>u`
	<button
		class="empty-state-story-button"
		data-variant=${e}
		slot="buttons"
	>
		Button ${t}
	</button>
`,K=(t=2)=>{const e=[];for(let s=0;s<t;s++)e.push(q(String(s+1),s===0?"primary":"secondary"));return e},{expect:m,waitFor:g}=__STORYBOOK_MODULE_TEST__,N=["search","file"],Z={search:I(),file:Y()},G=t=>Z[t],W={title:"CosmozEmptyState",component:"cosmoz-empty-state",tags:["autodocs"],argTypes:{header:{control:"select",options:N,description:"Example html rendered inside the header slot"},title:{control:"text",description:"Example text rendered inside the title slot"},description:{control:"text",description:"Example text rendered inside the default slot"},buttons:{control:{type:"range",min:0,max:4,step:1},description:"Example buttons rendered inside the buttons slot"}},args:{header:"search",title:"No results found",description:"Your search “Landing page design” did not match any projects. Please try again.",buttons:2}},d={render:t=>u`<cosmoz-empty-state>
            ${v(t.header,()=>G(t.header))}
            <h1 slot="title">${t.title}</h1>
            <p>${t.description}</p>
            ${v(t.buttons,()=>K(t.buttons))}
        </cosmoz-empty-state>`,play:async({canvasElement:t,step:e})=>{const s=H(t);await e("Assigns header content to the header slot",async()=>{const n=s.getByShadowRole("img");await g(()=>m(n.assignedSlot).toHaveAttribute("name","header"))}),await e("Assigns title content to the title slot",async()=>{const n=s.getByShadowRole("heading");await g(()=>m(n.assignedSlot).toHaveAttribute("name","title"))}),await e("Assigns children to the default slot",async()=>{const n=s.getByShadowRole("paragraph");await g(()=>m(n.assignedSlot).toHaveProperty("name",""))}),await e("Assigns button content to the buttons slot",async()=>{const n=s.getAllByShadowRole("button");for(const o of n)await g(()=>m(o.assignedSlot).toHaveAttribute("name","buttons"))})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`<cosmoz-empty-state>
            \${when(args.header, () => getHeaderContent(args.header))}
            <h1 slot="title">\${args.title}</h1>
            <p>\${args.description}</p>
            \${when(args.buttons, () => getButtons(args.buttons))}
        </cosmoz-empty-state>\`,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Assigns header content to the header slot', async () => {
      const header = canvas.getByShadowRole('img');
      await waitFor(() => expect(header.assignedSlot).toHaveAttribute('name', 'header'));
    });
    await step('Assigns title content to the title slot', async () => {
      const title = canvas.getByShadowRole('heading');
      await waitFor(() => expect(title.assignedSlot).toHaveAttribute('name', 'title'));
    });
    await step('Assigns children to the default slot', async () => {
      const description = canvas.getByShadowRole('paragraph');
      await waitFor(() => expect(description.assignedSlot).toHaveProperty('name', ''));
    });
    await step('Assigns button content to the buttons slot', async () => {
      const buttons = canvas.getAllByShadowRole('button');
      for (const button of buttons) {
        await waitFor(() => expect(button.assignedSlot).toHaveAttribute('name', 'buttons'));
      }
    });
  }
}`,...d.parameters?.docs?.source}}};const X=["Default"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`<cosmoz-empty-state>
            \${when(args.header, () => getHeaderContent(args.header))}
            <h1 slot="title">\${args.title}</h1>
            <p>\${args.description}</p>
            \${when(args.buttons, () => getButtons(args.buttons))}
        </cosmoz-empty-state>\`,
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Assigns header content to the header slot', async () => {
      const header = canvas.getByShadowRole('img');
      await waitFor(() => expect(header.assignedSlot).toHaveAttribute('name', 'header'));
    });
    await step('Assigns title content to the title slot', async () => {
      const title = canvas.getByShadowRole('heading');
      await waitFor(() => expect(title.assignedSlot).toHaveAttribute('name', 'title'));
    });
    await step('Assigns children to the default slot', async () => {
      const description = canvas.getByShadowRole('paragraph');
      await waitFor(() => expect(description.assignedSlot).toHaveProperty('name', ''));
    });
    await step('Assigns button content to the buttons slot', async () => {
      const buttons = canvas.getAllByShadowRole('button');
      for (const button of buttons) {
        await waitFor(() => expect(button.assignedSlot).toHaveAttribute('name', 'buttons'));
      }
    });
  }
}`,...d.parameters?.docs?.source}}};export{d as Default,X as __namedExportsOrder,W as default};
