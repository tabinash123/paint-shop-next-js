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
  transition: max-height 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &.expanded {
    max-height: 1000px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
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

const FAQAnswer = styled.div`
  font-size: 0.875rem;
  color: black;
  text-align: left;
  padding: 16px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
`;

const ExpandIcon = styled.span`
  font-size: 1.5rem;
  color: #5F2477;
  transform: rotate(${props => (props.expanded ? '180deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;

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
