# @jitendra/ui

A lightweight, production-ready React UI component library featuring Button, Card, and Input components with clean defaults and easy customization.

## Installation

```bash
npm install @jitendra/ui
# or
yarn add @jitendra/ui
```

Ensure React peer dependencies are installed:

```bash
npm install react react-dom
```

### Method 1 — Install Directly From GitHub (Recommended)

1. Create a GitHub repository (e.g., `jitendra-ui`).
2. Push this full library to GitHub. Example repo URL: `https://github.com/jitendra/jitendra-ui`.
3. In any React project where you want to consume the library, install it straight from GitHub:

   ```bash
   npm install git+https://github.com/jitendra/jitendra-ui.git
   ```

   This skips copying code manually, keeps the package private to your GitHub account, and always fetches the latest commit.
4. Use it just like an npm package:

   ```jsx
   import { Button, Card } from "@jitendra/ui";

   export function App() {
     return (
       <Card>
         <Button>Click Here</Button>
       </Card>
     );
   }
   ```

That’s it—your library behaves like a real npm package without publishing it to the public registry.

## Local Demo / Development

Run a live preview of the components using the included Vite demo:

```bash
npm install
npm start
```

This launches Vite at http://localhost:5173 with an example page showcasing Button, Card, and Input. The demo imports components through the package entry point (`@jitendra/ui`), so you are previewing the exact code consumers will use.

## Usage

Import the components you need:

```jsx
import { Button, Card, Input } from "@jitendra/ui";
```

### Button Example

```jsx
import { Button } from "@jitendra/ui";

export function ButtonDemo() {
  return (
    <div>
      <Button onClick={() => alert("Clicked!")}>Primary</Button>
      <Button variant="secondary" className="mt-2">Secondary</Button>
      <Button size="lg">Large Button</Button>
    </div>
  );
}
```

### Card Example

```jsx
import { Card } from "@jitendra/ui";

export function CardDemo() {
  return (
    <Card
      title="Card Title"
      footer={<span>Footer actions</span>}
    >
      <p>Cards are great for grouping content.</p>
    </Card>
  );
}
```

### Input Example

```jsx
import { Input } from "@jitendra/ui";

export function InputDemo() {
  return (
    <div>
      <Input label="Full Name" placeholder="Enter your name" />
      <Input label="Email" type="email" error="Invalid email" />
    </div>
  );
}
```

## Customization

Each component accepts a `className` prop so you can extend or override the default styling. You can also wrap these primitives with your own components to enforce design-system standards.

## Deterministic Card renderer (ui-cards)

Build form-like cards directly from JSON while keeping the UI deterministic and predictable.

```js
import { renderCardFromJSON } from "@jitendra/ui";

const payload = {
  type: "RADIO_OPTIONS",
  question: "Pick your plan",
  options: ["Starter", "Growth", "Enterprise"],
};

const card = renderCardFromJSON(payload);
```

Supported payload shapes:

```ts
// YES/NO
{ type: "YES_NO", question: "Are you over 18?" }

// Radio list (single select)
{ type: "RADIO_OPTIONS", question: "Pick one", options: ["A", "B"] }

// Checkbox list (multi select)
{ type: "MULTI_SELECT", question: "Pick many", options: ["A", "B"] }

// Text input
{ type: "TEXT_INPUT", question: "Share feedback", placeholder?: string }
```

Validation happens automatically; missing fields throw developer-friendly errors before render. You can also import each card directly:

```js
import {
  YesNoCard,
  RadioOptionsCard,
  MultiSelectCard,
  TextInputCard,
} from "@jitendra/ui";

<YesNoCard question="Is this helpful?" />;
```

## Project Structure

```
jitendra-ui/
  src/
    components/
      Button.jsx
      Card.jsx
      Input.jsx
    styles/
      button.css
      card.css
      input.css
  index.js
  package.json
  README.md
```

## Publishing

When you're ready to publish:

```bash
npm publish --access public
```

Make sure to update `package.json` metadata (repository URL, bugs, homepage) before releasing.
