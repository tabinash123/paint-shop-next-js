"use client";
import Head from 'next/head';
import Homepage from '@/conponents/hompage/Homepage';

export default function Page() {
  return (
    <>
      <Head>
        <title>House Painting Colors - snspaints.com</title>
        <meta name="description" content="Welcome to snspaints.com, the best place to buy house painting colors in Kathmandu, Nepal. We are an authorized dealer of Asian Paints, offering a wide range of quality paints for your home." />
        <link rel="canonical" href="https://www.snspaints.com/" />
        <meta property="og:title" content="House Painting Colors - snspaints.com" />
        <meta property="og:description" content="Welcome to snspaints.com, the best place to buy house painting colors in Kathmandu, Nepal. We are an authorized dealer of Asian Paints, offering a wide range of quality paints for your home." />
        <meta property="og:image" content="https://www.snspaints.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.snspaints.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "snspaints.com",
              "description": "The best place to buy house painting colors in Kathmandu, Nepal. We are an authorized dealer of Asian Paints.",
              "url": "https://www.snspaints.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sesamati Khola",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati",
                "postalCode": "44600",
                "addressCountry": "NP"
              }
            }
          `}
        </script>
      </Head>
      <Homepage />
    </>
  );
}