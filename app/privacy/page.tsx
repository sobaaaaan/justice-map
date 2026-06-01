export const metadata = {
  title: "プライバシーポリシー | 不起訴事件マップ",
};

const pageStyle: React.CSSProperties = {
  maxWidth: 880,
  margin: "0 auto",
  padding: "40px 20px",
  lineHeight: 1.9,
  color: "#222",
};

const h1Style: React.CSSProperties = {
  fontSize: 28,
  marginBottom: 24,
};

const h2Style: React.CSSProperties = {
  fontSize: 20,
  marginTop: 32,
  marginBottom: 12,
};

export default function PrivacyPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>プライバシーポリシー</h1>

      <p>
        不起訴事件マップは、利用者の個人情報の保護を重要なものと考え、
        以下の方針に基づき適切に取り扱います。
      </p>

      <h2 style={h2Style}>取得する情報</h2>
      <p>
        本サイトでは、お問い合わせ、削除依頼、異議申立て、投稿フォーム等を通じて、
        氏名、メールアドレス、投稿内容、問い合わせ内容等を取得する場合があります。
      </p>

      <h2 style={h2Style}>利用目的</h2>
      <ul>
        <li>お問い合わせへの回答</li>
        <li>投稿内容の確認、掲載判断、修正対応</li>
        <li>削除依頼、異議申立てへの対応</li>
        <li>サイトの品質向上、不正利用防止</li>
      </ul>

      <h2 style={h2Style}>Cookie・アクセス解析</h2>
      <p>
        本サイトでは、アクセス状況の把握やサービス改善のため、Cookieやアクセス解析ツールを使用する場合があります。
        Cookieはブラウザ設定により無効化できます。
      </p>

      <h2 style={h2Style}>広告配信について</h2>
      <p>
        本サイトでは、Google AdSense等の第三者配信広告サービスを利用する場合があります。
        広告配信事業者は、利用者の興味に応じた広告を表示するためCookieを使用することがあります。
      </p>

      <h2 style={h2Style}>第三者提供</h2>
      <p>
        取得した個人情報は、法令に基づく場合を除き、本人の同意なく第三者へ提供しません。
      </p>

      <h2 style={h2Style}>お問い合わせ</h2>
      <p>
        個人情報の取扱いに関するお問い合わせは、お問い合わせページよりご連絡ください。
      </p>
    </main>
  );
}
