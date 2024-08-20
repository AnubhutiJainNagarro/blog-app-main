'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/topMenu/TopMenu";
import Container from "@mui/material/Container";
import { BlogsProvider } from "@/context/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BlogsProvider>
          <TopMenu></TopMenu>
          <Container sx={{ maxWidth: { xs: "xs", md: "xl" } }}>
            {children}
          </Container>
        </BlogsProvider>
      </body>
    </html>
  );
}
