export const metadata = {
  title: "利用規約 | 不起訴事件マップ",
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

export default function TermsPage() {
  return (
    <main style={pageStyle}>
      <h1 style={h1Style}>利用規約</h1>

      <p>
        この利用規約は、不起訴事件マップの利用条件を定めるものです。
        本サイトを利用する方は、本規約に同意したものとみなします。
      </p>

      <h2 style={h2Style}>第1条 サイトの目的</h2>
      <p>
        本サイトは、報道機関等により公開された不起訴事件等の情報を整理し、
        地図上で可視化することを目的としています。
      </p>

      <h2 style={h2Style}>第2条 投稿内容</h2>
      <p>
        投稿者は、投稿内容が正確であり、第三者の権利を侵害しないよう十分注意するものとします。
        投稿内容に関する責任は投稿者にあります。
      </p>

      <h2 style={h2Style}>第3条 禁止事項</h2>
      <ul>
        <li>虚偽情報、誹謗中傷、名誉毀損にあたる投稿</li>
        <li>個人情報、プライバシーを侵害する投稿</li>
        <li>差別、偏見、憎悪を助長する投稿</li>
        <li>著作権その他の権利を侵害する投稿</li>
        <li>法令または公序良俗に反する行為</li>
      </ul>

      <h2 style={h2Style}>第4条 掲載・削除</h2>
      <p>
        管理者は、投稿内容の正確性、公益性、権利侵害のおそれ等を確認し、
        必要に応じて修正、非公開、削除、掲載見送りを行うことができます。
      </p>

      <h2 style={h2Style}>第5条 免責事項</h2>
      <p>
        本サイトは、掲載情報の正確性、完全性、最新性を保証するものではありません。
        本サイトの利用により生じた損害について、管理者は法令上認められる範囲で責任を負いません。
      </p>

      <h2 style={h2Style}>第6条 規約の変更</h2>
      <p>
        管理者は、必要に応じて本規約を変更できるものとします。
      </p>
    </main>
  );
}
