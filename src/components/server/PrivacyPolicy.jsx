import React from "react";

function PrivacyPolicy() {
    return (
        <div>
            <p className="title">プライバシーポリシー</p>
            <p className="title2">1. 個人情報の取得</p>
            <div className="detail">
                当社は、サービスのご利用にあたり、お客様から以下の個人情報を取得する場合があります。
                <br />
                ・氏名、住所、電話番号、メールアドレス
                <br />
                ・サービス利用履歴、IPアドレス、クッキー情報
            </div>
            <p className="title2">2. 個人情報の利用目的</p>
            <div className="detail">
                取得した個人情報は、以下の目的で使用します。 <br />
                サービス提供および運営 お問い合わせ対応 利用者動向の分析や改善
            </div>
            <p className="title2">3. 個人情報の第三者提供</p>

            <div className="detail">
                当社は、法令に基づく場合を除き、本人の同意を得ることなく第三者に個人情報を提供しません。
            </div>
            <p className="title2">4. 安全管理措置</p>
            <div className="detail">当社は、個人情報の漏洩や紛失を防止するため、適切なセキュリティ対策を講じます。</div>
            <p className="title2">5. プライバシーポリシーの変更</p>
            <div className="detail">当社は、法令の改定等に応じてプライバシーポリシーを変更することがあります。</div>
        </div>
    );
}

export default PrivacyPolicy;
