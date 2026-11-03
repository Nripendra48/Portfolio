
import "./globals.css";

export const metadata = {
  title: "Nripendra | Developer Portfolio",
  description:
    "Software developer portfolio showcasing projects, skills, and experience.",
    icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
