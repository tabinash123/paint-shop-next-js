"use client";
import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blogContainer">
      <h1 className="blogTitle">Expert Tips for Perfect House Painting in Nepal</h1>

      <section className="section">
        <h2 className="sectionTitle">Understanding Different Types of Paints</h2>
        <ul className="list">
          <li className="listItem">
            <h3 className="listItemTitle">Interior Paints</h3>
            <p className="listItemContent">
              For indoor spaces in Nepali homes, interior paints are essential. They are designed to be durable and easy to clean, perfect for high-traffic areas like living rooms and kitchens. Available in matte, satin, and gloss finishes, interior paints cater to different aesthetic preferences.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Exterior Paints</h3>
            <p className="listItemContent">
              Nepalis diverse climate demands robust exterior paints. These paints are formulated to withstand weather conditions, resisting fading, cracking, and mildew. They are available in finishes like flat, semi-gloss, and gloss to protect and beautify your homeis exterior.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Damp-Proof Paints</h3>
            <p className="listItemContent">
              In regions with high humidity or frequent rainfall, damp-proof paints are a must. They prevent moisture from penetrating walls, making them ideal for basements and bathrooms. These paints help maintain a dry and healthy environment by preventing mold and mildew.
            </p>
          </li>
        </ul>
      </section>

      <div className="divider" />

      <section className="section">
        <h2 className="sectionTitle">Step-by-Step Painting Process</h2>
        <ul className="list">
          <li className="listItem">
            <h3 className="listItemTitle">Step 1: Preparing the Surface</h3>
            <p className="listItemContent">
              Clean your walls thoroughly to remove any dust, dirt, or grease. Use a mild detergent and water, then rinse and let dry. Sand down any rough spots and fill holes or cracks with filler. Priming is crucial for ensuring better paint adhesion and a smooth finish.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 2: Gathering Your Materials</h3>
            <p className="listItemContent">
              Assemble all necessary materials before starting. This includes paint, brushes, rollers, painteris tape, drop cloths, and a ladder. Having everything ready will streamline the painting process.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 3: Protecting Your Space</h3>
            <p className="listItemContent">
              Cover floors and furniture with drop cloths to protect them from paint splatters. Use painteris tape to mask off areas you do not want painted, such as trim, windows, and doors.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 4: Cutting In</h3>
            <p className="listItemContent">
              Cutting in involves painting the edges of your walls with a brush. This means painting along the ceiling, corners, and trim where a roller can not reach. This creates a clean border for the rest of your painting.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 5: Rolling the Paint</h3>
            <p className="listItemContent">
              Use a roller to apply paint to the main wall surfaces. Roll in a W or M pattern for even coverage. Itis better to apply several thin coats rather than one thick one to avoid drips and ensure a smooth finish.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 6: Final Touches</h3>
            <p className="listItemContent">
              Once the paint is dry, carefully remove the painteris tape. Touch up any areas where paint has seeped through or coverage is uneven. Clean your brushes and rollers for future use.
            </p>
          </li>
        </ul>
      </section>

      <div className="divider" />

      <section className="section">
        <h2 className="sectionTitle">Step-by-Step Color Selection</h2>
        <ul className="list">
          <li className="listItem">
            <h3 className="listItemTitle">Step 1: Assess the Room</h3>
            <p className="listItemContent">
              Think about the roomis size, lighting, and existing decor. Light colors can make a small room feel larger, while darker shades add a cozy vibe. Natural light affects how colors look, so observe the room at different times of the day.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 2: Choose a Color Scheme</h3>
            <p className="listItemContent">
              Pick a color scheme that suits the roomis function and your personal style. You can go for a monochromatic scheme (different shades of one color), analogous colors (colors next to each other on the color wheel), or complementary colors (opposite each other on the color wheel).
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 3: Test Samples</h3>
            <p className="listItemContent">
              Always test paint samples on your walls. Paint small sections in various parts of the room to see how they look in different lighting. This helps you choose a color you will be happy with in all conditions.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 4: Consider the Finish</h3>
            <p className="listItemContent">
              The finish you choose can impact the roomis look and feel. Matte finishes hide imperfections, while satin and semi-gloss finishes are more durable and easier to clean, perfect for high-traffic areas.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Step 5: Make Your Decision</h3>
            <p className="listItemContent">
              Once youhave tested your samples and considered the finish, make your final choice. Keep the roomis purpose, lighting, and decor in mind to ensure a cohesive look.
            </p>
          </li>
        </ul>
      </section>

      <div className="divider" />

      <section className="section">
        <h2 className="sectionTitle">Eco-Friendly Painting Solutions</h2>
        <ul className="list">
          <li className="listItem">
            <h3 className="listItemTitle">Benefits of Low-VOC Paints</h3>
            <p className="listItemContent">
              Low-VOC (Volatile Organic Compounds) and zero-VOC paints are better for your health and the environment. They emit fewer harmful chemicals, making them a safer choice for indoor air quality, especially in homes with kids or pets.
            </p>
          </li>
          <li className="listItem">
            <h3 className="listItemTitle">Choosing Sustainable Brands</h3>
            <p className="listItemContent">
              Look for paint brands that prioritize sustainability. These companies often use eco-friendly materials and practices, reducing their environmental impact. Choosing sustainable brands helps support a healthier planet.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Blog;
