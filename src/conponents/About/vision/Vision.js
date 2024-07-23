import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Image from 'next/image'; // Import Image from next/image
import shop from '../../../../public/assets/paint-store.jpg';

const Section = styled.div`
  padding: 80px 0;
  background: linear-gradient(135deg, #003366 0%, #e91e63 100%);
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled(Typography)`
  && {
    color: #ffffff;
    font-weight: 800;
    margin-bottom: 40px;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-family: Arial, sans-serif;

    font-size: 2rem;
    @media (min-width: 600px) {
      font-size: 36px;
    }

  
  }
`;

const OwnerImage = styled.img`
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  height: auto;
  max-height: 300px;
`;

const QuoteWrapper = styled.div`
  position: absolute;
  font-size: 200px;
  opacity: 0.1;
  color: white;
  z-index: 0;
`;

const LeftQuote = styled(QuoteWrapper)`
  top: 50px;
  left: 50px;
  transform: rotate(180deg);
`;

const RightQuote = styled(QuoteWrapper)`
  bottom: 50px;
  right: 50px;
`;

const QuoteText = styled(Typography)`
  && {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    font-size: 18px;
    @media (min-width: 600px) {
      font-size: 24px;
    }
    @media (min-width: 960px) {
      font-size: 30px;
    }
    @media (min-width: 1280px) {
      font-size: 36px;
    }
  }
`;

const QuoteAuthor = styled(Typography)`
  && {
    color: white;
    margin-top: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    font-size: 14px;
    @media (min-width: 600px) {
      font-size: 18px;
    }
    @media (min-width: 960px) {
      font-size: 22px;
    }
    @media (min-width: 1280px) {
      font-size: 26px;
    }
  }
`;

const ImageSection = styled.div`
  flex: 1;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  min-height: 200px;

  @media (min-width: 768px) {
    min-height: 300px;
  }

  @media (min-width: 1024px) {
    min-height: 400px;
  }
`;

const OwnerIntroduction = () => {
  return (
    <Section>
      <LeftQuote>
        <FormatQuoteIcon fontSize="inherit" />
      </LeftQuote>
      <RightQuote>
        <FormatQuoteIcon fontSize="inherit" />
      </RightQuote>
      <Container>
        <Title variant="h1">Meet the Visionary Behind Our Colors</Title>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent="center">
              <ImageSection>
                <Image
                  src={shop}
                  alt="Shop Image"
                  layout="fill"
                  objectFit="cover"
                />
              </ImageSection>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <QuoteText variant="h4">
              Color is a power which directly influences the soul.
            </QuoteText>
            <QuoteAuthor variant="h6">
              - Wassily Kandinsky
            </QuoteAuthor>
            <Typography variant="body1" color="white" mt={3}>
              Hari Prassad Aryal, the founder of Saurav And Suvam Paints, has been a dedicated entrepreneur for the past 10 years. Located in Kathmandu, Nepal, the shop is an authorized dealer of Asian Paints in the region. With a passion for delivering high-quality paints and exceptional customer service, He has built a reputable business that stands out for its commitment to excellence and innovation in the paint industry.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default OwnerIntroduction;
