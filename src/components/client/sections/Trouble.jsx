"use client";
import React from "react";

function Trouble() {
    return (
        <section id="Trouble">
            <div className="inner">
                <div className="titles">
                    <p className="title">
                        「はぴラボ」で叶える
                        <br />
                        あなたの理想のライフスタイル
                    </p>
                </div>
                <div className="texts">
                    <span className="bg-cyan TroubleHighlight">話すのが好き</span>
                    <span className="bg-lightGreen TroubleHighlight">歌うのが好き</span>
                    <span className="bg-yellow TroubleHighlight">趣味を活かしたい</span>
                    <br />
                    そんなあなたの「好き」を応援します。
                    <br />
                    新しい自分との出会いが<br />きっとここにあります。
                </div>
                {/* <div className="exImg"></div> */}
            </div>
        </section>
    );
}

export default Trouble;
