// components/Carousel.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
`;

const CarouselTrack = styled.div`
  display: flex;
  width: calc(100% * 2); // Double the width for infinite loop effect
  animation: ${slide} 15s linear infinite;
`;

const CarouselItem = styled.div`
  width: auto;
  min-width: 25%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 20px;
  background-color: #f5f5f5;
  flex-shrink: 0;
`;

const Costumer = () => {
  const items = ['Fast Painting', 'Coloring', 'Wall Paint', 'Pencil Line'];

  // Duplicate items array to create a seamless loop effect
  const loopItems = [...items, ...items];

  return (
    <CarouselContainer>
      <CarouselTrack>
        {loopItems.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default Costumer;
