import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavbarComponents/Navbar";
import Footer from "./components/NavbarComponents/Footer";

// Existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// New fonts
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Next Claim MD",
  description: "The best Medical Billing Company in Pakistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${playfair.variable} 
          ${inter.variable} 
          antialiased
        `}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
