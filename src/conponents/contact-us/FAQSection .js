// src/FAQSection.js
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const FAQContainer = styled(Container)`
  padding: 50px 20px;
  background-color: #f9f9f9;
`;

const Title = styled(Typography)`
  color: #333;
  font-weight: bold;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
`;

const FAQAccordion = styled(Accordion)`
  background-color: #ffffff;
  box-shadow: none;
  border-bottom: 1px solid #e0e0e0;
  &:before {
    display: none;
  }
`;

const FAQSection = () => {
  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>
      <FAQAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is the return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our return policy allows returns within 30 days of purchase. Please keep your receipt for proof of purchase.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Once your order has shipped, we will send you an email with tracking information. You can also track your order through our website.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
      <FAQAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you offer custom paint colors?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer custom paint colors. Please visit our store or contact us for more information on custom orders.
          </Typography>
        </AccordionDetails>
      </FAQAccordion>
    </FAQContainer>
  );
};

export default FAQSection;
