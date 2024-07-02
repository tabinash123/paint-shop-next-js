import Head from 'next/head';
import BestSellingProducts from './BestSellingProducts';
import FAQ from './FAQ';
import Costumer from './Costumer';
import WhyChooseUsSection from './WhyToChooseUs';
import Blog from '../Blog';
import Intro from './heroSection/HeroSection';
import CategorySection from './categorySection/CategorySection';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>House Painting Colors - Your Paint Shop in Kathmandu</title>
        <meta name="description" content="Welcome to Your Paint Shop, the best place to buy house painting colors in Kathmandu, Nepal. We are an authorized dealer of Asian Paints, offering a wide range of quality paints for your home." />
        <link rel="canonical" href="https://www.yourpaintshop.com/" />
        <meta property="og:title" content="House Painting Colors - Your Paint Shop in Kathmandu" />
        <meta property="og:description" content="Welcome to Your Paint Shop, the best place to buy house painting colors in Kathmandu, Nepal. We are an authorized dealer of Asian Paints, offering a wide range of quality paints for your home." />
        <meta property="og:image" content="https://www.yourpaintshop.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.yourpaintshop.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Your Paint Shop",
              "description": "The best place to buy house painting colors in Kathmandu, Nepal. We are an authorized dealer of Asian Paints.",
              "url": "https://www.yourpaintshop.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Paint Street",
                "addressLocality": "Kathmandu",
                "addressRegion": "Bagmati",
                "postalCode": "44600",
                "addressCountry": "NP"
              }
            }
          `}
        </script>
      </Head>
      <Intro />
      <BestSellingProducts />
      <WhyChooseUsSection />
      <CategorySection />
      <Blog />  
      <FAQ />
      <Costumer />
    </>
  )
}

export default Homepage;
