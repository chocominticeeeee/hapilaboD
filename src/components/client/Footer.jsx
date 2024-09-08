"use client";
import React from "react";
import Terms from "../server/Terms";
import PrivacyPolicy from "../server/PrivacyPolicy";
import Commerce from "../server/Commerce";

function Footer(props) {
    const { setModalContent } = props;
    const clickHandler = (content) => {
        document.getElementById("Modal").classList.add("show");
        setModalContent(content);
    };
    return (
        <footer>
            <div className="inner">
                <div className="left">
                    <nav>
                        <ul>
                            <li>
                                <a
                                    onClick={() => {
                                        clickHandler(<Commerce />);
                                    }}
                                >
                                    特定商取引法に基づく表記
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        clickHandler(<PrivacyPolicy />);
                                    }}
                                >
                                    プライバシーポリシー
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => {
                                        clickHandler(<Terms />);
                                    }}
                                >
                                    利用規約
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <span className="copyLight">© Copyright ハピラボ All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
