"use client"
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';

const ProcessSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop:"50px",
  textAlign: 'center',
    color: '#e91e63',
  marginBottom: "90px",
}));

const ProcessTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  fontFamily: 'Arial, sans-serif',
  marginBottom: theme.spacing(1),
}));

const ProcessHeader = styled(Typography)(({ theme }) => ({
  color: '#003366',
  fontSize: '2rem',
  fontWeight: 800,
  fontFamily: 'Arial, sans-serif',
  marginBottom: theme.spacing(5),
}));

const StepIcon = styled(Box)(({ theme }) => ({
  backgroundColor: '#003366',
  borderRadius: '15px',
  width: '80px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  position: 'relative',
}));

const StepNumber = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -10,
  right: -10,
  backgroundColor: '#e91e63',
  color: 'white',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  color: '#0a2240',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  color: '#666',
}));

const ArrowIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    transform: 'rotate(90deg)',
    margin: theme.spacing(2, 0),
  },
}));

const PaintProcessFlow = () => {
  return (
    <ProcessSection>
      <ProcessTitle variant="h6">OUR PROCESS</ProcessTitle>
      <ProcessHeader variant="h3">Our Painting Process</ProcessHeader>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={3}>
          <StepIcon>
            <ColorLensIcon sx={{ color: 'white', fontSize: 40 }} />
            <StepNumber>01</StepNumber>
          </StepIcon>
          <StepTitle variant="h6">Choose Your Colors</StepTitle>
          <StepDescription>
            Browse our wide range of premium paint colors and finishes
          </StepDescription>
        </Grid>
        <Grid item xs={12} md={1}>
          <ArrowIcon>
            <Typography variant="h4" color="#ccc">→</Typography>
          </ArrowIcon>
        </Grid>
        <Grid item xs={12} md={3}>
          <StepIcon>
            <PaletteIcon sx={{ color: 'white', fontSize: 40 }} />
            <StepNumber>02</StepNumber>
          </StepIcon>
          <StepTitle variant="h6">Get a Quote</StepTitle>
          <StepDescription>
            Receive a detailed estimate for your painting project
          </StepDescription>
        </Grid>
        <Grid item xs={12} md={1}>
          <ArrowIcon>
            <Typography variant="h4" color="#ccc">→</Typography>
          </ArrowIcon>
        </Grid>
        <Grid item xs={12} md={3}>
          <StepIcon>
            <BrushIcon sx={{ color: 'white', fontSize: 40 }} />
            <StepNumber>03</StepNumber>
          </StepIcon>
          <StepTitle variant="h6">Professional Painting</StepTitle>
          <StepDescription>
            Our expert painters transform your space with precision
          </StepDescription>
        </Grid>
      </Grid>
    </ProcessSection>
  );
};

export default PaintProcessFlow;
