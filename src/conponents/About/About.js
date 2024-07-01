"use client"
import Introduction from './Introduction'
import Mission from './Mission'
import WhyUs from '../hompage/WhyToChooseUs'
import UserReviews from './UserReview'
import Vision from './Vision';



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