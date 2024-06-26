"use client"
import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: auto;
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const BlogTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 28px;
  color: #333;

  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Section = styled.section`
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 15px;
  }
`;

const SectionTitle = styled.h2`
  color: #00953b; /* Your theme color */
  font-size: 24px;
  border-bottom: 2px solid #00953b;
  padding-bottom: 10px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 992px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    margin-bottom: 15px;
    padding-bottom: 15px;
  }
`;

const ListItemTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  color: #555;

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 992px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ListItemContent = styled.p`
  line-height: 1.6;
  color: #666;

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }
  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 40px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Blog = () => {
  return (
    <BlogContainer>
      <BlogTitle>House Painting Tips and Information</BlogTitle>
      
      <Section>
        <SectionTitle>Choosing the Right Paint</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Overview</ListItemTitle>
            <ListItemContent>
              The right paint can make a big difference in the look and durability of your home. When choosing paint, consider each room's needs and the surface you are painting. High-traffic areas like kitchens and bathrooms need more durable, washable paints.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Types of Paint</ListItemTitle>
            <ListItemContent>
              There are different types of paint like latex, oil-based, and acrylic. Latex paint is popular for its durability and easy cleanup. Oil-based paint is great for trim and doors due to its smooth finish. Acrylic paint is flexible and resists chipping and cracking, making it ideal for exteriors.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Preparation Tips</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Cleaning Surfaces</ListItemTitle>
            <ListItemContent>
              Proper preparation is key to a successful paint job. Clean walls to remove dust and grease, which can prevent paint from sticking properly. Use a mild detergent and water, then rinse with clean water. Let surfaces dry completely before painting.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Repairing Damage</ListItemTitle>
            <ListItemContent>
              Before painting, fill any holes or cracks with a suitable filler. Sand down rough areas for a smooth surface. Remove any loose or peeling paint with a scraper. Priming repaired areas helps the paint stick better and provides a uniform finish.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Color Selection</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Choosing Colors</ListItemTitle>
            <ListItemContent>
              Color can transform a space. Think about the atmosphere you want in each room. Soft, cool colors like blue and green create a calming effect, while warm colors like red and yellow make a space feel cozy and inviting. Experiment with bold accent walls for a pop of color and interest.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Testing Colors</ListItemTitle>
            <ListItemContent>
              Always test paint samples on your walls. Paint small sections in different areas of the room to see how the color looks in various lighting conditions. Natural light changes the appearance of paint colors throughout the day. Observe the samples at different times to ensure you are happy with the final look.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Eco-Friendly Paint Options</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Low-VOC and Zero-VOC Paints</ListItemTitle>
            <ListItemContent>
              Eco-friendly paints are a healthier choice for your home and the environment. Low-VOC (Volatile Organic Compounds) and zero-VOC paints emit fewer harmful chemicals, reducing indoor air pollution. These paints are ideal for families with children or individuals with allergies or respiratory issues.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Benefits of Eco-Friendly Paints</ListItemTitle>
            <ListItemContent>
              These paints not only improve indoor air quality but also have minimal odor and are safer for individuals with allergies or chemical sensitivities. Additionally, eco-friendly paints can contribute to a healthier planet by reducing the overall carbon footprint of your home improvement projects.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>
    </BlogContainer>
  );
};

export default Blog;
