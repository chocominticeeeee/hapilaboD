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
                <div className="About_child">
                    <p className="title">
                        <span className="chon2">今だけ限定！</span>
                        <br />
                        Amazonギフト券
                        <br />
                        <span className="present">プレゼントキャンペーン開催中！</span>
                    </p>
                    <div className="texts">
                        応募➡審査通過➡配信開始で
                        <br />
                        <p className="fs-ajust1">3000円分のAmazonギフト券をプレゼント！</p>
                        <p className="fs-ajust2">
                            <br />
                            ※弊社指定のライバー事務所登録後、指定配信アプリにて1時間以上配信された方が対象となります。<br />
                            ※配信確認後1ヶ月後以降にお送りします。
                        </p>
                    </div>
                </div>
                <About_child title="「ハピラボ」とは？" img={IMG_STAR.src}>
                    家事や育児で忙しいあなたも
                    <br />
                    自分のペースで楽しく活動できる
                    <br />
                    女性向けライバー事務所です！
                    <br />
                    <br />
                    スキマ時間でOK！初心者の方も安心のサポート体制です。
                </About_child>
                <About_child title="ライブ配信ってどうやるの？">
                    <p className="center">「やってみたいけど、難しそう…」</p>
                    <br />
                    <div className="img">
                        <img src={IMG_QUESTION.src} alt="" />
                    </div>
                    <br />
                    そんな不安をお持ちのあなたも大丈夫！ <br />
                    <br />
                    当事務所では、配信のスタート方法から、トークのコツ、視聴者との交流まで、しっかりとサポートいたします。
                    <br />
                    <br />
                    <div className="how2support">
                        <span className="subTitle bg-cyan TroubleHighlight" data-icon="✨">
                            配信デビューをスムーズにサポート！
                        </span>
                        <ul>
                            <li>配信アプリの選び方から、アカウント作成、機材の準備まで、丁寧にサポートします。</li>
                            <li>配信の基礎知識や、魅力的な配信方法をレクチャーします。</li>
                            <li>トークのコツや、視聴者と楽しく交流する方法を伝授します。</li>
                        </ul>
                        <span className="subTitle bg-lightGreen TroubleHighlight" data-icon="⏰">
                            子育てや家事の合間に <br />
                            無理なく始められます！
                        </span>
                        <ul>
                            <li>スキマ時間でOK！あなたのペースで配信活動を楽しんでください。</li>
                            <li>配信スケジュールは、あなたに合わせて柔軟に調整できます。</li>
                            <li>無理なく続けられるよう、専属マネージャーがサポートします。</li>
                        </ul>
                        <span className="subTitle bg-yellow TroubleHighlight" data-icon="🤝">
                            わからないことや不安なことがあれば <br />
                            いつでも相談してください！
                        </span>
                        <ul>
                            <li>配信に関する疑問や不安は、いつでもお気軽にご相談ください。</li>
                            <li>経験豊富なスタッフが、親身になってサポートいたします。</li>
                        </ul>
                    </div>
                </About_child>
                <About_child title="「１人じゃない」安心感！" img={IMG_HAPPY.src}>
                    同世代の女性ライバーが多く、気軽に相談したり、情報交換ができる環境です。
                    <br />
                    コラボ配信で、さらに活動の幅を広げましょう！
                </About_child>
            </div>
        </section>
    );
}

export default About;
