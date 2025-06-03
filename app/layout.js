import "./globals.css";


export const metadata = {
  title: "Soul State",
  description: "SoulState is a simple web application to track your mood and help you feel better every day.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
