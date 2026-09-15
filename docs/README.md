# cosmoz-empty-state

A customizable empty-state web component for displaying a heading, description, illustration, and actions when there is no content to show.

Part of the [Neovici](https://neovici.se) design system.

## Installation

```bash
npm install @neovici/cosmoz-empty-state
```

## Usage

```javascript
import '@neovici/cosmoz-empty-state';
```

```html
<cosmoz-empty-state>
	<svg slot="header" class="icon">...</svg>
	<h1 slot="title">No results found</h1>
	<p>Your search did not match any projects. Please try again.</p>
	<button slot="buttons">Clear filters</button>
	<button slot="buttons">Create new project</button>
</cosmoz-empty-state>
```

## Slots

Content is configured through slots. The component has no custom properties, attributes, or events in its JavaScript API.

| Slot      | Description                                            |
| --------- | ------------------------------------------------------ |
| `header`  | Icon or illustration displayed above the text.         |
| `title`   | Heading for the empty state.                           |
| (default) | Description or supporting content below the heading.   |
| `buttons` | Action buttons displayed in a centered horizontal row. |

## Styling

### CSS Custom Properties

| Property                         | Default                       | Description                                 |
| -------------------------------- | ----------------------------- | ------------------------------------------- |
| `--cosmoz-empty-state-gap`       | `calc(var(--cz-spacing) * 8)` | Space between the header, main, and footer. |
| `--cosmoz-empty-state-max-width` | `32rem`                       | Maximum width of the component.             |

```css
cosmoz-empty-state {
	--cosmoz-empty-state-gap: 1.5rem;
	--cosmoz-empty-state-max-width: 40rem;
}
```

### CSS Parts

| Part      | Description                                  |
| --------- | -------------------------------------------- |
| `header`  | Container for the icon or illustration.      |
| `main`    | Container for the title and default content. |
| `title`   | Container for the heading.                   |
| `footer`  | Container for the actions area.              |
| `buttons` | Flex container for the action buttons.       |

```css
cosmoz-empty-state::part(buttons) {
	flex-wrap: wrap;
}
```

## Design Tokens

This component uses CSS custom properties from `@neovici/cosmoz-tokens` for spacing, typography, and text colors. Customize these tokens at the application level to match your theme.

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook:start

# Run lint and type checks
npm run lint

# Run tests
npm run test

# Build
npm run build
```

## License

Apache-2.0
