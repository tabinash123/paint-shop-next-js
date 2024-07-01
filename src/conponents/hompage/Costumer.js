// components/Marquee.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  box-sizing: border-box;
  padding: 5px 0; /* Reduced padding for a thinner strip */
  
  position: relative;
  background:linear-gradient(90deg, #391B49, #5F2477, #BA3966, #F06C45, #F13E2C) ;

  &:hover .marquee-content {
    animation-play-state: paused;
  }
`;

const MarqueeContent = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: ${scroll} ${(props) => props.speed || 20}s linear infinite;
  font-size: 1rem; /* Reduced font size for a thinner strip */
  position: relative;

  &:before, &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    left: 100%;205}s linear infinite;
  }

  &:after {
    left: 200%;
  }
`;

const CarouselItem = styled.span`
  display: inline-block;
  margin-right: 30px; /* Reduced margin for closer items */
  padding: 5px 15px; /* Reduced padding for a thinner strip */
  border-radius: 5px;
  background: ${(props) => props.bgColor};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff; /* Ensure text color is white for better readability */
`;

const Marquee = ({ speed }) => {
  const items = [
    { text: 'Fast Painting Service', bgColor: 'linear-gradient(90deg, #FF5733, #FFBD33)' },
    { text: 'High-Quality Colors', bgColor: 'linear-gradient(90deg, #8E44AD, #3498DB)' },
    { text: 'Affordable Prices', bgColor: 'linear-gradient(90deg, #1ABC9C, #16A085)' },
    { text: 'Professional Consultation', bgColor: 'linear-gradient(90deg, #F39C12, #D35400)' },
    { text: 'Customer Satisfaction Guaranteed', bgColor: 'linear-gradient(90deg, #2ECC71, #27AE60)' }
  ];

  // Duplicate items array to create a seamless loop effect
  const loopItems = [...items, ...items];

  return (
    <MarqueeContainer role="region" aria-label="Scrolling Marquee">
      <MarqueeContent className="marquee-content" speed={speed}>
        {loopItems.map((item, index) => (
          <CarouselItem key={index} bgColor={item.bgColor} role="listitem">
            {item.text}
          </CarouselItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;
