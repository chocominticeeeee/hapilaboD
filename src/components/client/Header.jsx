"use client";
import React, { useRef, useEffect } from "react";
import LOGO from "../../assets/happylabs2.webp";

function Header() {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.addEventListener("click", () => {
            location.reload();
            window.scrollTo({
                top: 0,
            });
        });
        return () => {};
    }, []);

    return (
        <header>
            <div className="left" ref={ref}>
                <img src={LOGO.src} alt="ライバー事務所はぴラボ" />
                <h1>ライバー事務所はぴラボ</h1>
            </div>
            <div className="right">
                <nav>
                    <ul>
                        <li>
                            <a href="">aaa</a>
                        </li>
                        <li>
                            <a href="">aaa</a>
                        </li>
                        <li>
                            <a href="">aaa</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
