
import "./globals.css";

export const metadata = {
  title: "Your Name | Developer Portfolio",
  description:
    "Software developer portfolio showcasing projects, skills, and experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
