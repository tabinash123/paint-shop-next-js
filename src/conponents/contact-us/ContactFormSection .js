// src/components/ContactFormSection.js
import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const FormContainer = styled(Container)`
  padding: 50px 20px;
  background-color: #ffffff;
  text-align: center;
`;

const Title = styled(Typography)`
  color: #333;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  background-color: #ff0049;
  color: #ffffff;
  &:hover {
    background-color: #e00044;
  }
`;

const ContactFormSection = () => {
  return (
    <FormContainer maxWidth="sm">
      <Title>Contact Us</Title>
      <form>
        <StyledTextField
          label="Name"
          variant="outlined"
          required
        />
        <StyledTextField
          label="Email"
          variant="outlined"
          type="email"
          required
        />
        <StyledTextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Box textAlign="center">
          <SubmitButton variant="contained" type="submit">
            Send Message
          </SubmitButton>
        </Box>
      </form>
    </FormContainer>
  );
};

export default ContactFormSection;
