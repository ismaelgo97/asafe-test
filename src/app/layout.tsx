import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "../components/SessionProvider";
import NavMenu from "../components/NavMenu";

export const metadata: Metadata = {
  title: "A-Safe Test",
  description: "Technical test for A-Safe front-end position",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={"bg-primary text-secondary"}>
        <SessionProvider session={session}>
          <main className="mx-auto max-w-5xl text-2xl flex-column gap-2">
            <NavMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
