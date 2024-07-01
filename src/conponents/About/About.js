import Introduction from './introduction/Introduction'
import Mission from './mission/Mission'
import WhyUs from '../hompage/WhyToChooseUs'
import UserReviews from './userReviews/UserReview'
import Vision from './vision/Vision';



const About = () => {
  return (
    <div>
      <Introduction />
      <Mission />
      <Vision />  
      <WhyUs />
      <UserReviews/>
    </div>
  )
}

export default About