import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/global/NavBar/page";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chase's Personal Site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/drs6wro.css" />
        <link rel="stylesheet" href="https://use.typekit.net/drs6wro.css" />
      </head>
      <body className="bg-body-bg bg-cover bg-no-repeat" >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
