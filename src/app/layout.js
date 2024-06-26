// layout.js
"use client";

import Footer from './Footer';
import Header from "./Header";
import GlobalStyle from './GlobalStyles';
import Hero from '../conponents/Hero'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <Header />
        <Hero/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
