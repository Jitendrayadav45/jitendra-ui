import React from "react";
import "../styles/cards.css";

export default function TextInputCard({ question, placeholder = "", name }) {
  const inputName = name || question;

  return (
    <section className="ui-card" aria-label={question}>
      <h3 className="ui-card__question">{question}</h3>
      <div className="ui-card__inputs">
        <input
          type="text"
          className="ui-card__text-input"
          placeholder={placeholder}
          name={inputName}
        />
      </div>
    </section>
  );
}
