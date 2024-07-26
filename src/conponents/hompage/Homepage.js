import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Intro from './heroSection/HeroSection';
import CategorySection from './categorySection/CategorySection';
import BestSellingProducts from './bestSellingProducts/BestSellingProducts';
// Dynamically import larger components
const WhyChooseUsSection = dynamic(() => import('./whyChooseUs/WhyToChooseUs'), { ssr: true });
const Blog = dynamic(() => import('../Blog'), { ssr: true });
const FAQ = dynamic(() => import('./FAQ'), { ssr: true });

const Homepage = ({ businessInfo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Add any analytics code here
  }, []);

  return (
    <>
      <Head>
        <title>Saurav and Suvam Paints - House Painting Colors in Kathmandu</title>
        <meta name="description" content="Find the best house painting colors at Saurav and Suvam Paints in Kathmandu, Nepal. Explore our wide range of quality paints." />
        <link rel="canonical" href="https://www.sns-paint.com" />
        <meta property="og:title" content="Saurav and Suvam Paints - House Painting Colors in Kathmandu" />
        <meta property="og:description" content="Find the best house painting colors at Saurav and Suvam Paints in Kathmandu, Nepal. Explore our wide range of quality paints." />
        <meta property="og:image" content="https://www.sns-paint.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.sns-paint.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "Saurav and Suvam Paints",
            "description": "Find the best house painting colors at Saurav and Suvam Paints in Kathmandu, Nepal. Explore our wide range of quality paints.",
            "image": "https://www.sns-paint.com/images/og-image.jpg",
            "url": "https://www.sns-paint.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kathmandu",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "postalCode": "44600",
              "addressCountry": "NP"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-1-XXXXXXX",
              "contactType": "Customer Service"
            }
          })}
        </script>
      </Head>
      <Intro />
      {isLoaded && (
        <>
          <BestSellingProducts />
          <WhyChooseUsSection />
          <CategorySection />
          <Blog />
          <FAQ />
        </>
      )}
    </>
  );
}

export default Homepage;
