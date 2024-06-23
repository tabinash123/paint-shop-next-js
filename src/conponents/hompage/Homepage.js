import CategorySection from './CategorySection'
import ProductHighlights from './ProductHighlights'
import FAQ from './FAQ'
import Costumer from './Costumer'
// import Header from '../Header'
// import Banner2 from './Banner2'
import Hero from '../Hero'
import WhyChooseUsSection from './WhyToChooseUs'
import Testimonial from '../Testimonial'
import NewsCard from './Blog'
import Intro from './Intro'
// import ProductPage from '../productpage/ProductDisplay'
// import Banner from '../Banner'
// import banner2 from '../../assets/Banner2.jpg'
 

const Homepage = () => {
  return (
    <div style={{backgroundColor:"#fff"}} >
      <Hero />
      <Intro />
      <ProductHighlights />
      <WhyChooseUsSection />
      <NewsCard />  
      <Costumer />
      <FAQ />


      {/* <Banner imageSrc={banner2} altText={"banner-image"} /> */}
      {/* <Testimonial /> */}

    </div>
  )
}

export default Homepage