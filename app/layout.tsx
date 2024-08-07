import type { Metadata } from "next";
import "./globals.css";
import { NavbarWithMegaMenu } from "./Components/Navbar";
import Footer from "@/app/Components/Footer"
import Provider from "./Provider";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    

      <body style={{margin:'0%', padding:'0%', width:'100%'}}>
        <Provider>
          <NavbarWithMegaMenu />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
