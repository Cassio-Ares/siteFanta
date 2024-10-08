import { Poppins } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav/Nav";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "700"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
