import React from "react";
import "../styles/card.css";

/**
 * Card component with optional header and footer.
 */
export default function Card({ title, footer, className = "", children, ...props }) {
  const classes = ["jit-card", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {title && <div className="jit-card__header">{title}</div>}
      <div className="jit-card__body">{children}</div>
      {footer && <div className="jit-card__footer">{footer}</div>}
    </div>
  );
}
