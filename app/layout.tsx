import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlothDesk — Make room for slow",
  description: "A calm task planner powered by open-source AI."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
