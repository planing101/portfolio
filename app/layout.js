import "./globals.css";

export const metadata = {
  title: "Pete's Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
