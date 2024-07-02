"use client";

import { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import GlobalStyle from './GlobalStyles';

const spin = keyframes`
  0%, 100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

const Spinner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
  height: 80px;

  div {
    width: 16px;
    height: 16px;
    background-color: #09f;
    border-radius: 50%;
    animation: ${spin} 1.4s infinite ease-in-out both;
  }

  div:nth-child(1) {
    animation-delay: -0.32s;
  }

  div:nth-child(2) {
    animation-delay: -0.16s;
  }
`;

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        {loading ? (
          <LoaderContainer>
            <Spinner>
              <div></div>
              <div></div>
              <div></div>
            </Spinner>
          </LoaderContainer>
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
