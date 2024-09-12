import axios from "axios";
import "./globals.scss";

axios.defaults.timeout = 6_000;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/Content/assets/styles.scss" />
      </head>
      <body>{children}</body>
    </html>
  );
}
