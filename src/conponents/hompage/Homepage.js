import BestSellingProducts from './BestSellingProducts'
import FAQ from './FAQ'
import Costumer from './Costumer'
import WhyChooseUsSection from './WhyToChooseUs'
import Blog from '../Blog'
import Intro from './heroSection/HeroSection'
import CategorySection from './categorySection/CategorySection'

const Homepage = () => {
  return (
    <>
    
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

export default Homepage