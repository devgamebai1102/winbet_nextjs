import './globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/Content/assets/styles.scss" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
