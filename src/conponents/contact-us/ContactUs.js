"use client"
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Container, Typography, TextField, Button, Stepper, Step, StepLabel, IconButton
} from '@mui/material';
import {
  Phone, Email, LocationOn, Facebook, Twitter, LinkedIn, Instagram
} from '@mui/icons-material';

const steps = ['Personal Information', 'Inquiry Details', 'Confirmation'];

const ContactUs = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleNext = () => {
    if (activeStep === 0 && formData.name && formData.email) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1 && formData.subject && formData.message) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully!');
    handleNext();
  };

  return (
    <>
      <GlobalStyle />
      <StyledContainer>
        <ContentWrapper>
          <FormContainer maxWidth="sm">
            <Header>
              <Typography variant="h4" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="subtitle1">
                We'd love to hear from you. Please fill out the form below.
              </Typography>
            </Header>

            <StyledStepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </StyledStepper>

            {activeStep === steps.length ? (
              <ConfirmationMessage>
                <Typography variant="h5" gutterBottom>
                  Thank you for your message!
                </Typography>
                <Typography variant="body1">
                  We will get back to you as soon as possible.
                </Typography>
              </ConfirmationMessage>
            ) : (
              <Form onSubmit={handleSubmit}>
                {activeStep === 0 && (
                  <StepContainer>
                    <TextField
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      margin="dense"
                      aria-label="Name"
                    />
                    <TextField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      margin="dense"
                      aria-label="Email"
                    />
                    <ButtonContainer>
                      <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                      <StyledButton variant="contained" color="primary" onClick={handleNext}>Next</StyledButton>
                    </ButtonContainer>
                  </StepContainer>
                )}

                {activeStep === 1 && (
                  <StepContainer>
                    <TextField
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      required
                      margin="dense"
                      aria-label="Subject"
                    />
                    <TextField
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      required
                      margin="dense"
                      aria-label="Message"
                    />
                    <ButtonContainer>
                      <Button onClick={handleBack}>Back</Button>
                      <StyledButton variant="contained" color="primary" onClick={handleNext}>Next</StyledButton>
                    </ButtonContainer>
                  </StepContainer>
                )}

                {activeStep === 2 && (
                  <ConfirmationStep>
                    <Typography variant="h6" gutterBottom>Review Your Information</Typography>
                    <Typography variant="body1"><strong>Name:</strong> {formData.name}</Typography>
                    <Typography variant="body1"><strong>Email:</strong> {formData.email}</Typography>
                    <Typography variant="body1"><strong>Subject:</strong> {formData.subject}</Typography>
                    <Typography variant="body1"><strong>Message:</strong> {formData.message}</Typography>
                    <ButtonContainer>
                      <Button onClick={handleBack}>Back</Button>
                      <StyledButton type="submit" variant="contained" color="primary">Submit</StyledButton>
                    </ButtonContainer>
                  </ConfirmationStep>
                )}
              </Form>
            )}
          </FormContainer>

          <MapContainer>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=Sesamati,+khola,+Kathmandu,+Nepal&output=embed"
              allowFullScreen
            ></iframe>
          </MapContainer>
        </ContentWrapper>

        <ContactInfo>
          <Typography variant="h6">Contact Information</Typography>
          <InfoItem>
            <Phone sx={{ mr: 1 }} /> +1 234 567 890
          </InfoItem>
          <InfoItem>
            <Email sx={{ mr: 1 }} /> contact@ecommerce.com
          </InfoItem>
          <InfoItem>
            <LocationOn sx={{ mr: 1 }} /> 1234 E-commerce St, Shopsville, USA
          </InfoItem>
          <SocialMedia>
            <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook"><Facebook /></IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter"><Twitter /></IconButton>
            <IconButton href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn"><LinkedIn /></IconButton>
            <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram"><Instagram /></IconButton>
          </SocialMedia>
        </ContactInfo>
      </StyledContainer>
    </>
  );
};

export default ContactUs;

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lora', serif;
    color: #333;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
  }
`;

// Styled Components
const StyledContainer = styled(Container)`
  margin-top: 40px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormContainer = styled(Container)`
  flex: 1;
  margin-right: 20px;
`;

const Header = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const StyledStepper = styled(Stepper)`
  margin-bottom: 24px;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const StyledButton = styled(Button)`
  background-color: #2c3e50 !important;
  color: #ecf0f1 !important;
  &:hover {
    background-color: #34495e !important;
  }
`;

const ConfirmationMessage = styled.div`
  text-align: center;
`;

const ConfirmationStep = styled.div`
  text-align: center;
`;

const ContactInfo = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  justify-content: center;
`;

const MapContainer = styled.div`
  flex: 1;
  height: 350px;
  width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
