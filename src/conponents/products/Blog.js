import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Sample blog data
const blogs = [
  {
    title: 'Choosing the Right Paint for Your Home',
    imageUrl: 'https://source.unsplash.com/400x300/?paint,home',
    description: 'Learn how to select the best paint for different areas of your home based on durability, finish, and color.',
  },
  {
    title: 'Step-by-Step Guide to Painting Your Living Room',
    imageUrl: 'https://source.unsplash.com/400x300/?painting,livingroom',
    description: 'Follow this comprehensive guide to paint your living room like a pro.',
  },
  {
    title: 'Understanding Paint Finishes and Their Uses',
    imageUrl: 'https://source.unsplash.com/400x300/?paint,finishes',
    description: 'Get to know different types of paint finishes and where to use them in your home.',
  },
  // Add more blog posts here...
];

const BlogSection = styled.section`
  padding: 60px 20px;
  background-color: #f8f8f8;
  text-align: center;
  margin-top: 50px;
  border-top: 1px solid #ddd;
`;

const BlogHeader = styled(Typography).attrs({
  variant: 'h2'
})`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 30px;
`;

const StyledCard = styled(Card)`
  max-width: 345px;
  margin: 20px auto;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BlogLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const ReadMoreText = styled(Typography).attrs({
  variant: 'body2',
  color: 'primary'
})`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled(ArrowForwardIcon)`
  margin-left: 5px;
`;

const Blog = () => {
  return (
    <BlogSection>
      <Container>
        <BlogHeader>Painting Tips & Guides</BlogHeader>
        <Grid container spacing={4} justifyContent="center">
          {blogs.map((blog, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Link href="/journal" passHref>
                <BlogLink>
                  <StyledCard>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={blog.title}
                        height="200"
                        image={blog.imageUrl}
                        title={blog.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                          {blog.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {blog.description}
                        </Typography>
                        <ReadMoreText>
                          Read more <Icon />
                        </ReadMoreText>
                      </CardContent>
                    </CardActionArea>
                  </StyledCard>
                </BlogLink>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </BlogSection>
  );
};

export default Blog;
