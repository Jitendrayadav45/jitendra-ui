import React from "react";
import { Button, Card, Input } from "@jitendra/ui";

export default function App() {
  return (
    <main className="demo-shell">
      <header>
        <h1>@jitendra/ui Demo</h1>
        <p>Quick preview of Button, Card, and Input components.</p>
      </header>

      <section>
        <h2>Buttons</h2>
        <div className="stack">
          <Button onClick={() => alert("Primary clicked")}>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section>
        <h2>Card</h2>
        <Card
          title="Demo Card"
          footer={<Button size="sm">Action</Button>}
        >
          <p>This card renders any children placed inside it.</p>
        </Card>
      </section>

      <section>
        <h2>Inputs</h2>
        <div className="stack">
          <Input label="Full name" placeholder="Enter your name" />
          <Input label="Email" type="email" error="Invalid email" />
        </div>
      </section>
    </main>
  );
}
