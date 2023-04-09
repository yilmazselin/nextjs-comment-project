import "@/styles/reset.scss";
import "@/styles/global.scss";
import "@/styles/variables.scss";

export const metadata = {
  title: "Interactive Comments",
  description: "Generated by selin yılmaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
