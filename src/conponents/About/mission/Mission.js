import React from 'react';
import './Mission.css';
import Image from 'next/image';
import mission from '../../../../public/assets/mission.PNG';
import PaletteIcon from '@mui/icons-material/Palette';

const Mission = () => {
  return (
    <section className="section fadeIn">
      <div className="dividerStyled" />
      <div className="containerWrapper">
        <div className="gridContainer">
          <div className="textWrapper">
            <h2 className="heading">Our Mission: Bringing Color to Your Life in Nepal</h2>
            <div className="iconWrapper">
              <PaletteIcon />
            </div>
            <ul className="list">
              <li className="listItem">Provide top-quality Asian Paints for homes and businesses across Nepal.</li>
              <li className="listItem">Offer a wide range of colors to match the unique tastes and preferences of the Nepali people.</li>
              <li className="listItem">Support local contractors and DIY enthusiasts with expert advice and exceptional service.</li>
              <li className="listItem">Enhance the beauty of Nepali homes with vibrant, long-lasting paint solutions.</li>
            </ul>
          </div>
          <div className="imageWrapper">
            <Image src={mission} alt="Our mission: Bringing Color to Your Life in Nepal" layout="responsive" width={500} height={300} />
            <div className="gradientOverlay" />
          </div>
        </div>
      </div>
      <div className="dividerStyled" />
    </section>
  );
};

export default Mission;
