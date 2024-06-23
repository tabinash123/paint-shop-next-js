import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Hero from '../Hero';

// Define a color palette inspired by a vibrant paint shop
const brandColors = {
  primary: '#3A2C73', // Deep purple
  secondary: '#FF6F61', // Bright red
  tertiary: '#7C83FD', // Vivid blue
  accent: '#FFD166', // Yellow
  text: '#333333', // Dark text color
};

const BlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background-color: #FDF5F3; /* Light peach background */
  color: ${brandColors.text}; /* Dark text color */
  font-family: 'Montserrat', sans-serif; /* Elegant font */
`;

const HeroSection = styled.section`
  width: 100%;
`;

const MainContent = styled.main`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const BlogPosts = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const BlogPostPreview = styled.div`
  background-color: #FFFFFF; /* White background */
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* Increased shadow */
  overflow: hidden; /* Hide overflowing content */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
  }
`;

const BlogPostImage = styled.img`
  width: 100%;
  height: 200px; /* Set fixed height for consistency */
  object-fit: cover; /* Maintain aspect ratio */
  border-radius: 10px 10px 0 0; /* Rounded corners */
`;

const BlogPostContent = styled.div`
  padding: 20px;
`;

const BlogPostTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: ${brandColors.primary}; /* Deep purple */
`;

const BlogPostDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  color: ${brandColors.secondary}; /* Bright red */
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${brandColors.accent}; /* Yellow */
  }
`;

const BlogPage = () => {
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      imageUrl: 'https://source.unsplash.com/random/300x200?sig=1&painting',
      title: 'Essential Painting Techniques',
      description: 'Master the art of painting with our detailed guides. From basic brushwork to advanced techniques, each post covers everything you need to know to achieve professional results.',
    },
    {
      id: 2,
      imageUrl: 'https://source.unsplash.com/random/300x200?sig=2&painting',
      title: 'Choosing the Perfect Color Palette',
      description: 'Explore how to choose the perfect color palette for your home. Our expert tips will help you create a harmonious and stylish living space.',
    },
    {
      id: 3,
      imageUrl: 'https://source.unsplash.com/random/300x200?sig=3&painting',
      title: 'Latest Trends in Interior Painting',
      description: 'Stay updated with the latest trends in interior painting. Discover new techniques and color combinations to transform your home.',
    },
    {
      id: 4,
      imageUrl: 'https://source.unsplash.com/random/300x200?sig=4&painting',
      title: 'Decorative Painting Techniques',
      description: 'Learn decorative painting techniques to add personality and elegance to your walls. Elevate your space with unique finishes and textures.',
    },
    {
      id: 5,
      imageUrl: 'https://source.unsplash.com/random/300x200?sig=5&painting',
      title: 'Tips for Exterior Painting',
      description: 'Ensure your exterior paint job stands the test of time. Our tips and tricks will guide you through the process of achieving a durable and beautiful finish.',
    },
    {
      id: 6,
      imageUrl: 'https://source.unsplash.com/random/300x200?sig=6&painting',
      title: 'DIY Painting Projects',
      description: 'Explore fun and creative DIY painting projects for every room in your home. Transform your space with easy-to-follow tutorials and expert advice.',
    },
  ];

  return (
    <BlogPageContainer>
      <Hero />
      <MainContent>
        <BlogPosts>
          {blogPosts.map((post) => (
            <BlogPostPreview key={post.id}>
              <BlogPostImage src={post.imageUrl} alt={`Painting Post ${post.id}`} />
              <BlogPostContent>
                <BlogPostTitle>{post.title}</BlogPostTitle>
                <BlogPostDescription>{post.description}</BlogPostDescription>
                <ReadMoreLink href="#">Read More</ReadMoreLink>
              </BlogPostContent>
            </BlogPostPreview>
          ))}
        </BlogPosts>
      </MainContent>
    </BlogPageContainer>
  );
};

export default BlogPage;
