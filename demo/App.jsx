import React from "react";
import "./App.css";
import { renderCardFromJSON } from "@jitendra/ui";

const payloads = [
  { type: "YES_NO", question: "Are you over 18?" },
  {
    type: "RADIO_OPTIONS",
    question: "Choose a plan",
    options: ["Starter", "Growth", "Enterprise"],
  },
  {
    type: "MULTI_SELECT",
    question: "Select toppings",
    options: ["Cheese", "Olives", "Onion"],
  },
  {
    type: "TEXT_INPUT",
    question: "Any additional notes?",
    placeholder: "Type here...",
  },
];

export default function App() {
  return (
    <main className="demo-shell">
      {payloads.map((payload, idx) => (
        <div key={idx}>{renderCardFromJSON(payload)}</div>
      ))}
    </main>
  );
}
