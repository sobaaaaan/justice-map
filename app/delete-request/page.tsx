export const metadata = {
  title: "削除依頼フォーム | 不起訴事件マップ",
  description: "不起訴事件マップに掲載された情報の削除依頼を受け付けるページです。",
};

const wrapStyle: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  padding: "40px 20px 64px",
  lineHeight: 1.8,
  color: "#222",
};

const formStyle: React.CSSProperties = {
  border: "1px solid #e7e7e7",
  borderRadius: 14,
  padding: 20,
  background: "#fff",
  marginTop: 20,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  margin: "14px 0 6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: 8,
  fontSize: 14,
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 140,
  resize: "vertical",
};

const buttonStyle: React.CSSProperties = {
  marginTop: 18,
  width: "100%",
  padding: "12px 16px",
  border: "none",
  borderRadius: 10,
  background: "#1a1a1a",
  color: "#fff",
  fontWeight: 700,
  fontSize: 15,
  cursor: "pointer",
};

export default function DeleteRequestPage() {
  return (
    <main style={{ background: "#f7f7f7", minHeight: "100vh" }}>
      <section style={wrapStyle}>
        <a href="/" style={{ color: "#1565c0", fontSize: 14 }}>
          ← 地図に戻る
        </a>

        <h1 style={{ fontSize: 30, margin: "18px 0 8px" }}>削除依頼フォーム</h1>

        <p style={{ color: "#666", margin: 0 }}>
          掲載内容に個人情報、誤情報、権利侵害のおそれがある場合は、以下の内容を記入して送信してください。
          内容確認後、必要に応じて非公開化または削除を行います。
        </p>

        <form
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
          style={formStyle}
        >
          <label style={labelStyle} htmlFor="name">
            氏名または連絡者名
          </label>
          <input id="name" name="氏名または連絡者名" type="text" required style={inputStyle} />

          <label style={labelStyle} htmlFor="email">
            メールアドレス
          </label>
          <input id="email" name="メールアドレス" type="email" required style={inputStyle} />

          <label style={labelStyle} htmlFor="targetUrl">
            削除を希望する投稿URL
          </label>
          <input id="targetUrl" name="削除希望URL" type="url" required style={inputStyle} />

          <label style={labelStyle} htmlFor="reason">
            削除を希望する理由
          </label>
          <textarea
            id="reason"
            name="削除依頼理由"
            required
            style={textareaStyle}
            placeholder="例：個人情報が含まれている、事実と異なる、権利侵害のおそれがある等"
          />

          <label style={labelStyle} htmlFor="evidence">
            参考資料URL・補足情報（任意）
          </label>
          <textarea id="evidence" name="参考資料・補足情報" style={textareaStyle} />

          <button type="submit" style={buttonStyle}>
            メールで削除依頼を送信する
          </button>
        </form>

        <p style={{ fontSize: 13, color: "#777", marginTop: 16 }}>
          ※ 初期実装ではメール送信形式です。後からSupabase保存型のフォームへ変更できます。
        </p>
      </section>
    </main>
  );
}
