import React, { useState } from 'react';
import { styled } from '@mui/system';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const StyledContainer = styled(Container)({
  maxWidth: '768px',
  margin: 'auto',
  padding: '16px',
});

const Header = styled('h2')({
  textAlign: 'center',
  marginBottom: '8px',
});

const SubHeader = styled('h1')({
  textAlign: 'center',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: '#003366',
  marginBottom: '32px',
});

const StyledAccordion = styled(Accordion)({
  border: '1px solid #ccc',
  borderRadius: '4px',
  marginBottom: '16px',
});

const StyledAccordionSummary = styled((props) => <AccordionSummary {...props} />)(({ expanded }) => ({
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px',
  fontSize: '1rem',
  fontWeight: 'bold',
  backgroundColor: expanded ? '#FF416C' : 'transparent',
  color: expanded ? 'white' : '#003366',
}));

const StyledAccordionDetails = styled(AccordionDetails)({
  padding: '16px',
  fontSize: '1rem',
  color: '#555',
});

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "What types of paints do you offer?",
      answer: "We offer a wide range of paints including interior paints, exterior paints, enamel paints, and specialty finishes. Our selection includes products from top brands to suit every need and budget.",
    },
    {
      question: "Do you provide home delivery within Nepal?",
      answer: "Yes, we provide home delivery services across Nepal. Delivery charges may vary depending on the location. Please refer to our delivery policy for more details.",
    },
    {
      question: "How can I choose the right paint for my home?",
      answer: "Choosing the right paint depends on various factors such as the surface type, the desired finish, and the environment. Our website offers a detailed guide and customer support to help you make the best choice. You can also visit our store for personalized advice.",
    },
    {
      question: "Are there any discounts available on bulk purchases?",
      answer: "Yes, we offer discounts on bulk purchases. Please contact our customer service or visit our store to learn more about our bulk pricing and special offers.",
    },
    {
      question: "What are your store locations in Nepal?",
      answer: "Our main store is located in Kathmandu.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including cash on delivery, credit/debit cards, bank transfers, and popular digital wallets like eSewa and Khalti.",
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Yes, we have a return and exchange policy. Products can be returned or exchanged within 15 days of purchase, provided they are in their original condition and packaging. Please contact our customer service for assistance.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via phone, email, or live chat on our website. Visit our 'Contact Us' page for more details.",
    },
  ];

  return (
    <StyledContainer>
      <Header>
        <Typography variant="h6" color="error" fontWeight="bold">FAQ'S</Typography>
      </Header>
      <SubHeader>
        Frequently Asked Questions
      </SubHeader>
      
      {faqData.map((faq, index) => (
        <StyledAccordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <StyledAccordionSummary
            expandIcon={expanded === `panel${index}` ? <RemoveIcon style={{ color: 'white' }} /> : <AddIcon style={{ color: '#003366' }} />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            expanded={expanded === `panel${index}`}
          >
            {faq.question}
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {faq.answer}
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </StyledContainer>
  );
};

export default FAQSection;
