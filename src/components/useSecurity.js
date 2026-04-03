import { useEffect } from "react";

export default function useSecurity() {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (
                e.key === "F12" ||
                (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
                (e.ctrlKey && e.key === "U")
            ) {
                e.preventDefault();
            }
        };

        const handleRightClick = (e) => {
            e.preventDefault();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("contextmenu", handleRightClick);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("contextmenu", handleRightClick);
        };
    }, []);
}