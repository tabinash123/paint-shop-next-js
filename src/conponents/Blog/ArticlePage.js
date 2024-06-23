// ArticlePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Container, Typography, CircularProgress } from '@mui/material';

const articles = [
  {
    id: 1,
    title: 'How to Paint a Room Like a Pro',
    summary: 'Learn how to paint a room like a professional with our step-by-step guide. From prepping the walls to choosing the right paint, we cover all the essentials.',
    date: '2024-01-01',
    author: 'John Doe',
    content: [
      'Step 1: Prep the room by moving furniture and laying down drop cloths.',
      'Step 2: Clean the walls to remove dust and dirt.',
      'Step 3: Use painter’s tape to protect trim and edges.',
      'Step 4: Apply a primer if necessary.',
      'Step 5: Start painting from the top down, using a brush for edges and a roller for larger areas.',
      'Step 6: Apply a second coat if needed.',
      'Step 7: Clean up and enjoy your freshly painted room!',
    ],
  },
  {
    id: 2,
    title: 'Top 10 Paint Colors for 2024',
    summary: 'Discover the latest color trends for your home in 2024. From soothing neutrals to bold statement hues, find the perfect color for every room.',
    date: '2024-02-15',
    author: 'Jane Smith',
    content: [
      '1. Warm Beige – A versatile neutral that works in any room.',
      '2. Navy Blue – A classic choice for a sophisticated look.',
      '3. Sage Green – Perfect for bringing a touch of nature indoors.',
      '4. Terracotta – Adds warmth and a rustic feel.',
      '5. Soft Gray – A timeless option for modern interiors.',
      '6. Mustard Yellow – Bright and cheerful, great for accents.',
      '7. Blush Pink – Soft and romantic, ideal for bedrooms.',
      '8. Deep Red – Bold and dramatic, makes a statement.',
      '9. Light Blue – Calming and serene, perfect for bathrooms.',
      '10. Charcoal – Sleek and stylish, works well with contemporary designs.',
    ],
  },
  {
    id: 3,
    title: 'Latex vs. Oil-Based Paint: Which is Best?',
    summary: 'Choosing between latex and oil-based paint depends on your project. Here’s a guide to help you decide which type of paint is best for your needs.',
    date: '2024-03-10',
    author: 'Mike Johnson',
    content: [
      'Latex Paint: Water-based, easy to clean up with soap and water, dries quickly, low odor, flexible and less prone to cracking. Best for interior walls and ceilings.',
      'Oil-Based Paint: Solvent-based, requires mineral spirits for cleanup, dries slowly, strong odor, durable and resistant to wear and tear. Best for trim, doors, and high-moisture areas.',
      'Consider the project requirements and choose accordingly.',
    ],
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ArticleContainer = styled(Container)`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(15deg, #fff, #f9f9f9);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
`;

const ArticleTitle = styled(Typography)`
  font-family: 'Playfair Display', serif;
  color: #333;
  margin-bottom: 20px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const ArticleSubtitle = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  color: #777;
  margin-bottom: 20px;
`;

const ArticleContent = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  color: #555;
  line-height: 1.8;
  margin-bottom: 10px;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundArticle = articles.find(a => a.id === parseInt(id));
    setTimeout(() => {
      setArticle(foundArticle);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  if (!article) {
    return (
      <ArticleContainer>
        <Typography variant="h5">Article not found</Typography>
      </ArticleContainer>
    );
  }

  return (
    <ArticleContainer>
      <ArticleTitle variant="h4" component="h1" gutterBottom>
        {article.title}
      </ArticleTitle>
      <ArticleSubtitle variant="subtitle1" gutterBottom>
        By {article.author} on {article.date}
      </ArticleSubtitle>
      {article.content.map((step, index) => (
        <ArticleContent key={index} variant="body1">
          {step}
        </ArticleContent>
      ))}
    </ArticleContainer>
  );
};

export default ArticlePage;
