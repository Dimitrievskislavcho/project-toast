import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, clearToasts } = React.useContext(ToastContext);
  React.useEffect(() => {
    const dismissAllToasts = ({ code }) => {
      if (code === "Escape") {
        clearToasts();
      }
    };

    window.addEventListener("keyup", dismissAllToasts);

    return () => window.removeEventListener("keyup", dismissAllToasts);
  }, []);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
