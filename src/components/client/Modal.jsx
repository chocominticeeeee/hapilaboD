"use client";
import React, { useEffect, useRef } from "react";

function Modal(props) {
    const { content } = props;
    const closeRef = useRef(null);
    const modalRef = useRef(null);
    const bodyRef = useRef(null);
    useEffect(() => {
        const handler = () => {
            document.getElementById("Modal").classList.remove("show");
        };
        closeRef.current.addEventListener("click", handler);
        modalRef.current.addEventListener("click", handler);
        bodyRef.current.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }, []);
    return (
        <div id="Modal">
            <div className="inner" ref={modalRef}>
                <div className="body" ref={bodyRef}>
                    {content}
                    <div className="close" ref={closeRef}>
                        ✕
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
