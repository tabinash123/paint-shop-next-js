"use client";
import React from 'react';
import Head from 'next/head';
import Introduction from './introduction/Introduction';
import Mission from './mission/Mission';
import WhyUs from '../hompage/WhyToChooseUs'
import UserReviews from './userReviews/UserReview';
import Vision from './vision/Vision';
import AssociatePartners from './AssociatePartners'
import PaintProcessFlow from './PaintProcessFlow'

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - snspaint.com</title>
        <meta name="description" content="Learn more about snspaint.com, the leading paint shop in Kathmandu, Nepal. Discover our mission, vision, and why customers choose us for their painting needs." />
        <link rel="canonical" href="https://www.snspaint.com/about" />
        <meta property="og:title" content="About Us - snspaint.com" />
        <meta property="og:description" content="Learn more about snspaint.com, the leading paint shop in Kathmandu, Nepal. Discover our mission, vision, and why customers choose us for their painting needs." />
        <meta property="og:image" content="https://www.snspaint.com/images/about-us.jpg" />
        <meta property="og:url" content="https://www.snspaint.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "snspaint.com",
              "url": "https://www.snspaint.com/about",
              "logo": "https://www.snspaint.com/images/logo.png",
              "description": "Learn more about snspaint.com, the leading paint shop in Kathmandu, Nepal. Discover our mission, vision, and why customers choose us for their painting needs.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sesamati Khola",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati",
                "postalCode": "44600",
                "addressCountry": "NP"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 234 567 890",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Head>
      <div>
        <Introduction />
        <Mission />
        <Vision />
        <WhyUs />
        <UserReviews />
        {/* <AssociatePartners /> */}
        <PaintProcessFlow />
      </div>
    </>
  );
};

export default About;
