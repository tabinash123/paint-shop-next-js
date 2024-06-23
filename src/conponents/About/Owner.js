import React from 'react';
import { Container, Grid, Card, Typography, IconButton } from '@material-ui/core';
import { Email, Phone, LinkedIn } from '@material-ui/icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';
import owner from '../../assets/owner.jpg'

const Root = styled(Container)`
  padding: 32px;
  background-color: #f5f5f5;
  margin:0px auto;
`;

const ProfileCard = styled(Card)`
  // padding: 32px;
  background: #f9f9f9;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  border-radius: 15px;
  width:300px;  
  text-align: center;
     @media (max-width: 768px) {
     width:100%;  
       padding: 0px;

     }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 16px;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  // border-radius: 50%;
   @media (max-width: 768px) {
    width: 100px;
  height: 100px;
    }
  
`;

const Name = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
  
`;

const Title = styled(Typography)`
  font-size: 1rem;
  color: #333;
  margin-bottom: 16px;
`;

const Bio = styled(Typography)`
  font-size: 1rem;
  color: #333;
  // margin-bottom: 24px;
`;

const Icons = styled.div`
  & > * {
    margin: 8px;
  }
`;

const CarouselWrapper = styled(Carousel)`
  & .react-multi-carousel-item {
    padding: 8px;
  }
`;

const AwardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
    
`;

const dummyAwards = [
  'https://via.placeholder.com/300x200?text=Award+1',
  'https://via.placeholder.com/300x200?text=Award+2',
  'https://via.placeholder.com/300x200?text=Award+3',
  'https://via.placeholder.com/300x200?text=Award+4',
];

const OwnerSection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Root>
      <Grid container spacing={4} alignItems="center">
        {/* Left Part: Owner Information */}
        <Grid item xs={12} md={6}>
          <ProfileCard>
            <ProfileImage
              alt="Owner Name"
              src={owner}  // Dummy image for owner
            />
            <Name variant="h4" style={{fontSize:"25px",fontWeight:"700",fontFamily:"Poppins" }} >
              Hari Prassad Aryal
            </Name>
            <Title variant="h9"  style={{fontSize:"15px",fontWeight:"500",fontFamily:"Poppins" }} >
              Owner
            </Title>
            <Bio variant="body2"  style={{marginTop:'5px', fontSize:"10px",fontWeight:"500",fontFamily:"Poppins" }} >
              John Doe is the visionary founder of PaintShop, bringing over 20 years of experience in the industry. His dedication to excellence and innovation drives the company success and growth.

              Contact::
            </Bio>
            <Icons>
              <IconButton href="mailto:owner@example.com" style={{ color: '#fff' }}>
                <Email />
              </IconButton>
              <IconButton href="tel:+123456789" style={{ color: '#fff' }}>
                <Phone />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/owner" style={{ color: '#fff' }}>
                <LinkedIn />
              </IconButton>
            </Icons>
          </ProfileCard>
        </Grid>
        {/* Right Part: Awards/Achievements Carousel */}
        <Grid item xs={12} md={6}>
          <CarouselWrapper
            responsive={responsive}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={3000}
          >
            {dummyAwards.map((award, index) => (
              <div key={index}>
                <AwardImage src={award} alt={`Award ${index + 1}`} />
              </div>
            ))}
          </CarouselWrapper>
        </Grid>
      </Grid>
    </Root>
  );
};

export default OwnerSection;
