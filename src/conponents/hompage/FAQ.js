import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const SectionContainer = styled.div`
  padding: 40px 20px;
  background-color: #fff;
  color: black;
  font-family: 'Arial, sans-serif';
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: black;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1.75rem;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const FAQItem = styled.div`
  margin-bottom: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: none;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  &.expanded {
    max-height: 1000px;
  }

  &.collapsed {
    max-height: 60px;
  }
`;

const FAQSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 16px;
  background-color: #f5f5f5;

  &:hover {
    background-color: #ebebeb;
  }
`;

const FAQQuestion = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  margin: 0;
`;

const FAQAnswer = styled.p`
  font-size: 0.875rem;
  color: black;
  text-align: left;
  margin: 16px;
`;

const ExpandIcon = styled.span`
  font-size: 1.5rem;
  color: #5F2477;
  transform: rotate(${props => (props.expanded ? '180deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;

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
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => () => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <>
      <Head>
        <title>Frequently Asked Questions</title>
      </Head>
      <SectionContainer>
        <Title>Frequently Asked Questions</Title>
        <FAQContainer>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              className={expanded === `panel${index}` ? 'expanded' : 'collapsed'}
            >
              <FAQSummary onClick={handleChange(`panel${index}`)}>
                <FAQQuestion>{item.question}</FAQQuestion>
                <ExpandIcon expanded={expanded === `panel${index}`}>▼</ExpandIcon>
              </FAQSummary>
              {expanded === `panel${index}` && (
                <FAQAnswer>{item.answer}</FAQAnswer>
              )}
            </FAQItem>
          ))}
        </FAQContainer>
      </SectionContainer>
    </>
  );
};

export default FAQ;
