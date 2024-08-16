import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  function addNewToast ({ message, variant }) {
    const id = crypto.randomUUID();
    const newToast = { message, variant, id };
    setToasts([...toasts, newToast]);
  };
  function removeToastWithId(removedToastId) {
    const filteredToasts = toasts.filter(({ id }) => {
      return id !== removedToastId
    });
    setToasts(filteredToasts);
  };
  function clearToasts() {
    setToasts([]);
  }

  const contextValue = React.useMemo(() => {
    return {
      toasts,
      addNewToast,
      removeToastWithId
    };
  }, [toasts]);

  useEscapeKey(clearToasts);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
