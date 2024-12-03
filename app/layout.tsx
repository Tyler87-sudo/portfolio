import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from ".//components/header"; 
import Footer from ".//components/footer"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    
    <html lang="en">
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Include the Header and Footer here */}
        <div className="grid grid-cols-1 max-[600px]:mx-1 mx-5"> 
        <Header/>
        </div>
        <main>{children}</main> {/* Render the content of each page */}
        <div className="mx-5 max-[600px]:mx-1">
        <Footer /> {/* Add Footer after the content */}
        </div>
        
      </body>
    </html>
  );
}