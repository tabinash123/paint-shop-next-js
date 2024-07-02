"use client";
import React from 'react';
import Head from 'next/head';
import Introduction from './introduction/Introduction';
import Mission from './mission/Mission';
import WhyUs from '../hompage/WhyToChooseUs'
import UserReviews from './userReviews/UserReview';
import Vision from './vision/Vision';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - sns-paint.com</title>
        <meta name="description" content="Learn more about sns-paint.com, the leading paint shop in Kathmandu, Nepal. Discover our mission, vision, and why customers choose us for their painting needs." />
        <link rel="canonical" href="https://www.sns-paint.com/about" />
        <meta property="og:title" content="About Us - sns-paint.com" />
        <meta property="og:description" content="Learn more about sns-paint.com, the leading paint shop in Kathmandu, Nepal. Discover our mission, vision, and why customers choose us for their painting needs." />
        <meta property="og:image" content="https://www.sns-paint.com/images/about-us.jpg" />
        <meta property="og:url" content="https://www.sns-paint.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "sns-paint.com",
              "url": "https://www.sns-paint.com/about",
              "logo": "https://www.sns-paint.com/images/logo.png",
              "description": "Learn more about sns-paint.com, the leading paint shop in Kathmandu, Nepal. Discover our mission, vision, and why customers choose us for their painting needs.",
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
      </div>
    </>
  );
};

export default About;
