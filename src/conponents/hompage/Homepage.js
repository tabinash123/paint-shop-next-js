import BestSellingProducts from './BestSellingProducts'
import FAQ from './FAQ'
import Costumer from './Costumer'
import WhyChooseUsSection from './WhyToChooseUs'
import NewsCard from './Blog'
import Intro from './Intro'
import Hero from '../Hero';
import CategorySection from './CategorySection'
const Homepage = () => {
  return (
    <>
    
      {/* <Hero /> */}
      <Intro />
      <BestSellingProducts />
      <WhyChooseUsSection />
      <CategorySection />
      <NewsCard />  
      <Costumer />
      <FAQ />



    </>
  )
}

export default Homepage