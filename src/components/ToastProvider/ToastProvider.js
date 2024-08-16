import React from "react";

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
      console.log({ id, removedToastId })

      return id !== removedToastId
    });
    setToasts(filteredToasts);
  };

  const contextValue = React.useMemo(() => {
    return {
      toasts,
      addNewToast,
      removeToastWithId,
    };
  }, [toasts]);

  console.log(contextValue)

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
