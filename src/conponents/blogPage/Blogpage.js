// "use client"
import React from 'react';
import styled from  'styled-components';

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
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
  font-size: 24px;
  background: linear-gradient(90deg, #FF5733, #C70039, #900C3F, #581845);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 2px solid #FF5733;
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
      <BlogTitle>Expert Tips for Perfect House Painting in Nepal</BlogTitle>
      
      <Section>
        <SectionTitle>Understanding Different Types of Paints</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Interior Paints</ListItemTitle>
            <ListItemContent>
              For indoor spaces in Nepali homes, interior paints are essential. They are designed to be durable and easy to clean, perfect for high-traffic areas like living rooms and kitchens. Available in matte, satin, and gloss finishes, interior paints cater to different aesthetic preferences.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Exterior Paints</ListItemTitle>
            <ListItemContent>
              Nepal is diverse climate demands robust exterior paints. These paints are formulated to withstand weather conditions, resisting fading, cracking, and mildew. They are available in finishes like flat, semi-gloss, and gloss to protect and beautify your home is exterior.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Damp-Proof Paints</ListItemTitle>
            <ListItemContent>
              In regions with high humidity or frequent rainfall, damp-proof paints are a must. They prevent moisture from penetrating walls, making them ideal for basements and bathrooms. These paints help maintain a dry and healthy environment by preventing mold and mildew.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Step-by-Step Painting Process</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Step 1: Preparing the Surface</ListItemTitle>
            <ListItemContent>
              Clean your walls thoroughly to remove any dust, dirt, or grease. Use a mild detergent and water, then rinse and let dry. Sand down any rough spots and fill holes or cracks with filler. Priming is crucial for ensuring better paint adhesion and a smooth finish.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 2: Gathering Your Materials</ListItemTitle>
            <ListItemContent>
              Assemble all necessary materials before starting. This includes paint, brushes, rollers, painter is tape, drop cloths, and a ladder. Having everything ready will streamline the painting process.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 3: Protecting Your Space</ListItemTitle>
            <ListItemContent>
              Cover floors and furniture with drop cloths to protect them from paint splatters. Use painter is tape to mask off areas you don not want painted, such as trim, windows, and doors.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 4: Cutting In</ListItemTitle>
            <ListItemContent>
              Cutting in, involves painting the edges of your walls with a brush. This means painting along the ceiling, corners, and trim where a roller can not reach. This creates a clean border for the rest of your painting.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 5: Rolling the Paint</ListItemTitle>
            <ListItemContent>
              Use a roller to apply paint to the main wall surfaces. Roll in a W or M pattern for even coverage. It is better to apply several thin coats rather than one thick one to avoid drips and ensure a smooth finish.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 6: Final Touches</ListItemTitle>
            <ListItemContent>
              Once the paint is dry, carefully remove the painter is tape. Touch up any areas where paint has seeped through or coverage is uneven. Clean your brushes and rollers for future use.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Step-by-Step Color Selection</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Step 1: Assess the Room</ListItemTitle>
            <ListItemContent>
              Think about the room is size, lighting, and existing decor. Light colors can make a small room feel larger, while darker shades add a cozy vibe. Natural light affects how colors look, so observe the room at different times of the day.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 2: Choose a Color Scheme</ListItemTitle>
            <ListItemContent>
              Pick a color scheme that suits the room is function and your personal style. You can go for a monochromatic scheme (different shades of one color), analogous colors (colors next to each other on the color wheel), or complementary colors (opposite each other on the color wheel).
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 3: Test Samples</ListItemTitle>
            <ListItemContent>
              Always test paint samples on your walls. Paint small sections in various parts of the room to see how they look in different lighting. This helps you choose a color you will be happy with in all conditions.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 4: Consider the Finish</ListItemTitle>
            <ListItemContent>
              The finish you choose can impact the room is look and feel. Matte finishes hide imperfections, while satin and semi-gloss finishes are more durable and easier to clean, perfect for high-traffic areas.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Step 5: Make Your Decision</ListItemTitle>
            <ListItemContent>
              Once you have tested your samples and considered the finish, make your final choice. Keep the room is purpose, lighting, and decor in mind to ensure a cohesive look.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>

      <Divider />

      <Section>
        <SectionTitle>Eco-Friendly Painting Solutions</SectionTitle>
        <List>
          <ListItem>
            <ListItemTitle>Benefits of Low-VOC Paints</ListItemTitle>
            <ListItemContent>
              Low-VOC (Volatile Organic Compounds) and zero-VOC paints are better for your health and the environment. They emit fewer harmful chemicals, making them a safer choice for indoor air quality, especially in homes with kids or pets.
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemTitle>Choosing Sustainable Brands</ListItemTitle>
            <ListItemContent>
              Look for paint brands that prioritize sustainability. These companies often use eco-friendly materials and practices, reducing their environmental impact. Choosing sustainable brands helps support a healthier planet.
            </ListItemContent>
          </ListItem>
        </List>
      </Section>
    </BlogContainer>
  );
};

export default Blog;
