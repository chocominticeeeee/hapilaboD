"use client";
import React, { useRef, useEffect, useState } from "react";

function MoveTop() {
    const moveTopRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isBottom, setIsBottom] = useState(false);
    useEffect(() => {
        const SCROLL_THRESHOLD = 250;
        const SCROLL_THRESHOLD_FROM_BOTTOM = 5;

        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight;
            const scrollFromBottom = docHeight - (scrollTop + window.innerHeight);

            setIsVisible(scrollTop > SCROLL_THRESHOLD);
            if (scrollFromBottom < SCROLL_THRESHOLD_FROM_BOTTOM) {
                moveTopRef.current.classList.add("isBottom");
            } else {
                moveTopRef.current.classList.remove("isBottom");
            }
        });

        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        const currentRef = moveTopRef.current;
        currentRef.addEventListener("click", handleClick);

        return () => {
            currentRef.removeEventListener("click", handleClick);
        };
    }, []);
    return (
        <div id="moveTop" className={isVisible ? "" : "hidden"} ref={moveTopRef}>
            ＞
        </div>
    );
}

export default MoveTop;
