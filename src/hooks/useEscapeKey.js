import React from 'react';

function useEscapeKey(callback) {
    React.useEffect(() => {
        const onEscapeButton = ({ code }) => {
            if (code === "Escape") {
                callback()
            }
        };

        window.addEventListener("keyup", onEscapeButton);

        return () => window.removeEventListener("keyup", onEscapeButton);
        }, []);
}

export default useEscapeKey;