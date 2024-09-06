import React from "react";

function Terms() {
    return (
        <div>
            <p className="title">利用規約</p>
            <p className="title2">第1条（適用）</p>
            <div className="detail">
                本規約は、株式会社サンプル（以下「当社」といいます。）が提供するサービス（以下「本サービス」といいます。）の利用に関して、利用者に適用されます。
            </div>
            <p className="title2">第2条（利用登録）</p>
            <div className="detail">利用者は、本規約に同意のうえ、所定の方法で利用登録を行うものとします。</div>
            <p className="title2">第3条（禁止事項）</p>
            <div className="detail">
                利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。
                <br />
                法令または公序良俗に反する行為
                <br />
                他の利用者や第三者への誹謗中傷、迷惑行為
                <br />
                当社のシステムに不正アクセスする行為
            </div>
            <p className="title2">第4条（サービスの提供の中断・停止）</p>
            <div className="detail">
                当社は、以下の事由が生じた場合、利用者に事前通知なく本サービスの提供を中断または停止することがあります。
                <br />
                <br />
                システムのメンテナンス
                <br />
                天災など不可抗力による障害
            </div>
            <p className="title2">第5条（免責事項）</p>
            <div className="detail">当社は、本サービスの利用に関連して生じた損害について、一切の責任を負いません。</div>
        </div>
    );
}

export default Terms;
