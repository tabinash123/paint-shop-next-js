// pages/faq.js

import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles'; // Ensure the correct import
import Head from 'next/head';

const SectionContainer = styled(Container)(({ theme }) => ({
  padding: '40px 20px',
  backgroundColor: '#fff',
  color: 'black',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
}));

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: '600',
  marginBottom: '1.5rem',
  color: 'black',
  textAlign: 'center',
});

const FAQContainer = styled('div')`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const FAQItem = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
}));

const FAQQuestion = styled(Typography)({
  fontSize: '1rem',
  fontWeight: '500',
  color: 'black',
});

const FAQAnswer = styled(Typography)({
  fontSize: '0.875rem',
  color: 'black',
  textAlign: 'left',
});

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy allows for returns within 30 days of purchase. Please ensure that the product is in its original condition and packaging. Contact our customer service for more details.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination. Please refer to our shipping policy for more information.",
  },
  {
    question: "How can I track my order?",
    answer: "Once your order has been shipped, you will receive an email with a tracking number and a link to track your order. You can also track your order through our website by logging into your account.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. All transactions are secure and encrypted for your safety.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact our customer support team via email, phone, or live chat. Our contact information is available on the 'Contact Us' page. We strive to respond to all inquiries within 24 hours.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions</title>
      </Head>
      <SectionContainer maxWidth="lg">
        <Title variant="h2">Frequently Asked Questions</Title>
        <FAQContainer>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#5F2477' }} />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <FAQQuestion>{item.question}</FAQQuestion>
              </AccordionSummary>
              <AccordionDetails>
                <FAQAnswer>{item.answer}</FAQAnswer>
              </AccordionDetails>
            </FAQItem>
          ))}
        </FAQContainer>
      </SectionContainer>
    </>
  );
};

export default FAQ;
