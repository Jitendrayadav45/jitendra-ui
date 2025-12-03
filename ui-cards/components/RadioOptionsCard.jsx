import React, { useId } from "react";
import "../styles/cards.css";

export default function RadioOptionsCard({ question, options = [], name }) {
  const generatedId = useId();
  const groupName = name || `radio-${generatedId}`;

  return (
    <section className="ui-card" role="group" aria-label={question}>
      <h3 className="ui-card__question">{question}</h3>
      <div className="ui-card__inputs">
        {options.map((option, index) => (
          <label key={`${option}-${index}`} className="ui-card__option">
            <input type="radio" name={groupName} value={option} />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
