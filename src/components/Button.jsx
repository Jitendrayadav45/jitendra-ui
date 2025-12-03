import React from "react";
import "../styles/button.css";

/**
 * Button component with minimal variants and sizes.
 */
export default function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  const classes = [
    "jit-btn",
    `jit-btn--${variant}`,
    `jit-btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
