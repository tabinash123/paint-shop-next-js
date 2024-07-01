"use client";
import React from 'react';
import './Vision.css';
import Image from 'next/image';
import story from '../../../../public/assets/story.PNG';

const Vision = () => {
  return (
    <section className="section">
      <div className="containerWrapper">
        <div className="gridContainer">
          <div className="imageWrapper">
            <Image src={story} alt="Our vision: Transforming Color Selection in Nepal" layout="responsive" width={500} height={300} />
            <div className="gradientOverlay" />
          </div>
          <div className="textWrapper">
            <h2 className="heading">Our Vision: Transforming Color Selection in Nepal</h2>
            <ul className="list">
              <li className="listItem">Provide innovative online tools for effortless color selection in Nepal.</li>
              <li className="listItem">Help you visualize different shades in your space before making a decision.</li>
              <li className="listItem">Make the process of picking the right paint color easy and enjoyable for all Nepali homeowners.</li>
              <li className="listItem">Inspire creativity and confidence in every painting project with our support.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="dividerStyled" />
    </section>
  );
};

export default Vision;
