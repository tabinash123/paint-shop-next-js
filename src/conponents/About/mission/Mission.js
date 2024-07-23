"use client"
import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, Box, useTheme, useMediaQuery } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TelescopeIcon from '@mui/icons-material/Visibility';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 30px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    padding: 40px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding: 50px;
  }
`;

const LeftHalf = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 8px;
  min-height: 200px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    border-radius: 45%;
  }

  &::before {
    background-color: rgba(230, 57, 70, 0.1);
    bottom: -80%;
    left: -25%;
    animation: wave 8s infinite linear;
  }

  &::after {
    background-color: rgba(10, 47, 92, 0.1);
    bottom: -90%;
    right: -25%;
    animation: wave 10s infinite linear;
  }

  @keyframes wave {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    min-height: 250px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    min-height: 300px;
    margin-right: 30px;
    margin-bottom: 0;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    min-height: 400px;
  }
`;

const PaintBrush = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 80px;
  height: 200px;
  background-color: #0a2f5c;
  border-radius: 10px 10px 0 0;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #e63946;
    border-radius: 5px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #f0f0f0;
    border-radius: 0 0 10px 10px;
  }
`;

const RightHalf = styled.div`
  flex: 1;
  padding-right: 0;

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-right: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    padding-right: 40px;
  }
`;

const Subtitle = styled(Typography)`
  color: #e63946;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 10px !important;
  text-transform: uppercase;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 1rem;
  }
`;

const MainTitle = styled(Typography)`
  color: #0a2f5c !important;
  font-family: Arial, sans-serif;
  font-size: 2rem !important;
  font-weight: bold !important;
  margin-bottom: 20px !important;
  line-height: 1.2 !important;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 2.2rem !important;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 2.5rem !important;
  }
`;

const MissionVisionBox = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
`;

const IconWrapper = styled.div`
  color: #e63946;
  margin-right: 15px;
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 8px 0 rgba(0, 0, 0, 0.1);
`;

const MissionVisionTitle = styled(Typography)`
  color: #0a2f5c !important;
  font-family: Arial, sans-serif;
  font-size: 1.1rem !important;
  font-weight: bold !important;
  margin-bottom: 5px !important;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 1.2rem !important;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const ExperienceImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 15px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
`;

const ListItem = styled.li`
  font-family: Arial, sans-serif;
  font-size: 0.9rem;
  color: #555555;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-size: 1rem;
  }
`;

const CompanyIntro = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Section theme={theme}>
      {!isMobile && (
        <LeftHalf theme={theme}>
          <PaintBrush />
        </LeftHalf>
      )}
      <RightHalf theme={theme}>
        <Subtitle variant="body1" theme={theme}>Our Mission & Vision</Subtitle>
        <MainTitle variant="h1" theme={theme}>
          Transforming Homes with Quality Paint
        </MainTitle>        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <MissionVisionBox>
              <IconWrapper>
                <RocketLaunchIcon fontSize={isMobile ? "medium" : "large"} />
              </IconWrapper>
              <Box>
                <MissionVisionTitle variant="h2" theme={theme}>Our Mission</MissionVisionTitle>
                <ul>
                  <ListItem theme={theme}>Deliver Premium, eco-friendly paints...</ListItem>
                  <ListItem theme={theme}>Enhance the aesthetics and durability of homes in Kathmandu.</ListItem>
                  <ListItem theme={theme}>Deliver exceptional customer service and satisfaction.</ListItem>
                </ul>
              </Box>
            </MissionVisionBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MissionVisionBox>
              <IconWrapper>
                <TelescopeIcon fontSize={isMobile ? "medium" : "large"} />
              </IconWrapper>
              <Box>
                <MissionVisionTitle variant="h2" theme={theme}>Our Vision</MissionVisionTitle>
                <ul>
                  <ListItem theme={theme}>Be the leading paint supplier in Kathmandu.</ListItem>
                  <ListItem theme={theme}>Innovate with advanced, sustainable painting technologies.</ListItem>
                  <ListItem theme={theme}>Transform every home into a vibrant and welcoming space.</ListItem>
                </ul>
              </Box>
            </MissionVisionBox>
          </Grid>
        </Grid>
        
        <ExperienceContainer>
          <Typography variant="body2" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 500, fontSize: isMobile ? '0.9rem' : '1rem' }}>
            With years of expertise, we ensure every project is handled with precision and care.
          </Typography>
        </ExperienceContainer>
      </RightHalf>
    </Section>
  );
};

export default CompanyIntro;