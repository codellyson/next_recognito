import React from "react";

function Alert({ message, heading, type, ...rest }) {
  return (
    <div className={`alert ${type}`} role="alert" {...rest}>
      <button
        className="close"
        onClick="this.parentNode.classList.add('dispose')"
        type="button"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <h4 className="alert-heading">{heading}</h4>
      <p>{message}</p>
    </div>
  );
}

export default Alert;
