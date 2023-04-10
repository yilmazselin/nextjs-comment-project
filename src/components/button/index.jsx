import React from "react";

import styles from "./styles.module.scss";

function Button({ children, variant = "ghost", className, ...props }) {
  return (
    <button
      {...props}
      className={(styles.button, className, styles[variant])}
    >
      {children}
    </button>
  );
}

export { Button };
