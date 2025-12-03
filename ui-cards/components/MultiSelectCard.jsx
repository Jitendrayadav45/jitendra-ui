import React from "react";
import "../styles/cards.css";

export default function MultiSelectCard({ question, options = [], name }) {
  const groupName = name || question;

  return (
    <section className="ui-card" role="group" aria-label={question}>
      <h3 className="ui-card__question">{question}</h3>
      <div className="ui-card__inputs">
        {options.map((option, index) => (
          <label key={`${option}-${index}`} className="ui-card__option">
            <input type="checkbox" name={`${groupName}-${index}`} value={option} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
