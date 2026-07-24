import { useRef, useEffect } from "react";

export function useAutoScroll() {
    const containerRef = useRef(null);

    useEffect(() => {
        const containerElem = containerRef.current;
        if (containerElem) {
            containerElem.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, []);
    
    return containerRef;
}