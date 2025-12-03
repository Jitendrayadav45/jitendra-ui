import React, { useId } from "react";
import "../styles/cards.css";

export default function YesNoCard({ question, name }) {
  const generatedId = useId();
  const groupName = name || `yes-no-${generatedId}`;
  return (
    <section className="ui-card" role="group" aria-label={question}>
      <h3 className="ui-card__question">{question}</h3>
      <div className="ui-card__inputs ui-card__inputs--inline">
        <label className="ui-card__option">
          <input type="radio" name={groupName} value="yes" />
          <span>Yes</span>
        </label>
        <label className="ui-card__option">
          <input type="radio" name={groupName} value="no" />
          <span>No</span>
        </label>
      </div>
    </section>
  );
}
