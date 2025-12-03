import React from "react";
import "../styles/input.css";

/**
 * Input field with optional label and error message.
 */
export default function Input({
  label,
  error,
  className = "",
  type = "text",
  ...props
}) {
  const wrapperClasses = ["jit-input", className].filter(Boolean).join(" ");
  const inputClasses = ["jit-input__field", error ? "jit-input__field--error" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClasses}>
      {label && <label className="jit-input__label">{label}</label>}
      <input type={type} className={inputClasses} {...props} />
      {error && <div className="jit-input__error">{error}</div>}
    </div>
  );
}
