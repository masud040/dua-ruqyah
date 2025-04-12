import { Inter, Poppins } from "next/font/google";
import Header from "../components/shared/Header";
import Sidebar from "../components/shared/Sidebar";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Dua & Ruqyah",
  description: "This is a dua and ruqyah app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <div className="flex min-h-screen max-w-[1920px] mx-auto p-10 gap-[30px] ">
          {/* sidebar */}
          <div className="w-[100px] relative">
            <Sidebar />
          </div>
          <div className="flex-1 w-full">
            {/* haeder */}
            <Header />
            <div className="h-[calc(100vh-173px)] mt-[19px]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
