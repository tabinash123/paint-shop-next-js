"use client"
import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import cardsData from '../../data/cardData';

const MainContainer = styled.div`
  padding: 20px;
  background-color: #fff;
`;

const Header = styled.h2`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Dots = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
`;

const Container = styled.div`
  display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CustomCard = styled(Card)`
  max-width: 345px;
  margin: 20px;
  position: relative;
  border-radius: 0px;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.6s, box-shadow 0.6s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 10px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 45%;
  }
`;

const CustomCardMedia = styled.div`
  height: 200px;
  position: relative;
`;

const DateOverlay = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: black;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CustomCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  transition: background-color 0.6s, color 0.6s;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserName = styled(Typography)`
  margin-left: 5px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const Title = styled(Typography)`
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled(Typography)`
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #555;
`;

const CustomCardActions = styled(CardActions)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  padding-bottom: 16px;
  background-color: #f5f5f5;
  position: relative;
  overflow: hidden;
`;

const ReadMoreText = styled.div`
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 10px;
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 0.6s ease, opacity 0.6s ease;

  ${CustomCard}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ArrowIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0px;
  transition: transform 0.6s ease;
  transform: translateX(0);

  ${CustomCard}:hover & {
    transform: translateX(20px);
  }
`;

const CardContainer = () => {
  return (
    <MainContainer>
      <Header>Blogs</Header>
      <Dots>
        <Dot color="#FF5733" />
        <Dot color="#C70039" />
        <Dot color="#900C3F" />
        <Dot color="#581845" />
      </Dots>
      <Container>
        {cardsData.map((card, index) => (
          <CustomCard key={index}>
            <CustomCardMedia>
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
              <DateOverlay>
                <CalendarTodayIcon fontSize="small" />
                {card.date}
              </DateOverlay>
            </CustomCardMedia>
            <CustomCardContent>
              <UserInfo>
                <AccountCircleIcon fontSize="small" />
                <UserName>{card.author}</UserName>
              </UserInfo>
              <Title gutterBottom variant="h6" component="div">
                {card.title}
              </Title>
              <Description variant="body2">
                {card.description}
              </Description>
            </CustomCardContent>
            <CustomCardActions>
              <ReadMoreText>Read more</ReadMoreText>
              <ArrowIconContainer>
                <ArrowForwardIcon />
              </ArrowIconContainer>
            </CustomCardActions>
          </CustomCard>
        ))}
      </Container>
    </MainContainer>
  );
};

export default CardContainer;
