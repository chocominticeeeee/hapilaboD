"use client";
import React from "react";
import FlowChild from "../FlowChild";

function Flow() {
    return (
        <section id="Flow">
            <div className="inner">
                <div className="content">
                    <p className="flowTitle">配信開始までの流れ</p>
                    <ul>
                        <FlowChild title="公式LINEを登録" index="1">
                            画面下のボタンから公式LINEアカウントを友だち追加してください。
                        </FlowChild>
                        <FlowChild title="応募フォームから応募" index="2">
                            公式LINEアカウント内にある応募フォームに必要事項をご記入の上、送信してください。{" "}
                        </FlowChild>
                        <FlowChild title="面接" index="3">
                            担当者より、応募フォームにご記入いただいたご連絡先へご連絡いたします。
                        </FlowChild>
                        <FlowChild title="審査" index="4">
                            面接後、審査結果については合否に関わらずご連絡いたします{" "}
                        </FlowChild>
                        <FlowChild title="活動スタート！" index="5">
                            審査を通過された方は、いよいよ活動スタートです！
                            個性を活かした配信で、たくさんのファンを獲得しましょう！
                        </FlowChild>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Flow;
