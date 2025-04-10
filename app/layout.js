import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dua & Ruqyah",
  description: "This is a dua and ruqyah app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen p-10 gap-[30px]">
          <Sidebar />
          <div className="flex-1 w-full">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
