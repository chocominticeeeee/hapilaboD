"use client";
import React, { useRef, useEffect } from "react";

function Footer() {
    return (
        <footer>
            <div className="inner">
                <div className="left">
                    <nav>
                        <ul>
                            <li>
                                <a href="">特定商取引法に基づく表記</a>
                            </li>
                            <li>
                                <a href="">プライバシーポリシー</a>
                            </li>
                            <li>
                                <a href="">利用規約</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <span className="copyLight">© Copyright はぴラボ All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
