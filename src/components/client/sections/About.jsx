"use client";
import React from "react";
import About_child from "../About_child";

import IMG_STAR from "../../../assets/star.webp";
import IMG_QUESTION from "../../../assets/question.webp";
import IMG_HAPPY from "../../../assets/happy.webp";

function About() {
    return (
        <section id="About">
            <div className="inner">
                <About_child title="「はぴラボ」とは？" img={IMG_STAR.src}>
                    家事や育児で忙しいあなたも、自分のペースで楽しく活動できるライブ配信事務所です。<br />
                    スキマ時間でOK！安心のサポート体制で初心者も安心
                </About_child>
                <About_child title="ライブ配信ってどうやるの？" img={IMG_QUESTION.src}>
                    配信の始め方から、トーク術、視聴者とのコミュニケーションまで、丁寧にサポートします。<br />
                    子育てや家事の合間でも、無理なく活動できます。 分からないことや不安なことは、いつでも相談可能です！
                </About_child>
                <About_child title="「一人じゃない」安心感！\nアットホームなコミュニティ" img={IMG_HAPPY.src}>
                    同世代の女性ライバーが多く、気軽に相談したり、情報交換ができる環境です。<br />
                    コラボ配信で、さらに活動の幅を広げましょう！
                </About_child>
            </div>
        </section>
    );
}

export default About;
