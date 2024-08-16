import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const IconTag = ICONS_BY_VARIANT[variant];
  const variantClass = styles[variant];
  const { removeToastWithId } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${variantClass}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        aria-live="off"
        aria-label="Dismiss message"
        className={styles.closeButton}
        onClick={() => removeToastWithId(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
