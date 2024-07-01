import './Introduction.css';
import store from '../../../../public/assets/paint-store.jpg';
import Image from 'next/image';

const Introduction = () => {
  return (
    <section className="introSection">
      <div className="textContainer">
        <h1 className="headline">Welcome to Saurav and Shuvam Paint</h1>
        <h2 className="subheadline">Your Trusted Asian Paints Dealer in Kathmandu, Nepal</h2>
        <p className="mission">
          At Saurav and Shuvam Paint, we’re committed to helping you transform your spaces with the finest quality paints. As a leading Asian Paints dealer in Kathmandu, we offer a wide array of vibrant colors and finishes. Whether you’re a homeowner or a contractor, our expert team is here to provide personalized advice and exceptional service. Visit us and experience why we are Kathmandu’s preferred paint store.
        </p>
      </div>
      <div className="imageContainer">
        <Image
          src={store}
          alt="Saurav and Shuvam Paint Store in Kathmandu"
          layout="responsive"
          placeholder="blur"
          quality={75}
        />
      </div>
    </section>
  );
};

export default Introduction;
