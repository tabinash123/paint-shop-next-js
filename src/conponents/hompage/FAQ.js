import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const FAQHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const FAQSubHeader = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 40px;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FAQItem = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const FAQQuestion = styled.div`
  padding: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: '+';
    font-size: 1.5rem;
  }

  ${({ isOpen }) => isOpen && `
    &:after {
      content: '-';
    }
  `}
`;

const FAQAnswer = styled.div`
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;

  ${({ isOpen }) => isOpen && `
    max-height: 500px;
    padding: 0 20px 20px;
  `}
`;

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
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
      answer: "Our  store is located in Sesmati,Kathmandu.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods like bank transfers, eSewa and Khalti.",
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Yes, we have a return and exchange policy. Products can be returned or exchanged within 5 days of purchase, provided they are in their original condition and packaging. Please contact our customer service for assistance.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our customer support team via phone, email, or live chat on our website. Visit our 'Contact Us' page for more details.",
    },
  ];

  return (
    <FAQContainer>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
      <FAQSubHeader>Get answers to the most asked questions about our paint products and services.</FAQSubHeader>
      <FAQGrid>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <FAQQuestion 
              onClick={() => toggleItem(index)}
              isOpen={openItems[index]}
            >
              {item.question}
            </FAQQuestion>
            <FAQAnswer isOpen={openItems[index]}>
              {item.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQGrid>
    </FAQContainer>
  );
};

export default FAQSection;