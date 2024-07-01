"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import demoCategories from '@/data/demoCategories'; // Ensure the path is correct
import './CategorySection.css';

const CategorySection = () => {
  return (
    <div className="section-container">
      <h1 className="title">SHOP BY <strong>CATEGORY</strong></h1>
      <p className="subheading">Explore our diverse range of paint categories to find the perfect fit for your project</p>
      <div className="grid-container">
        {demoCategories.map((category) => (
          <Link key={category.id} href="/products" passHref legacyBehavior>
            <a style={{ textDecoration: 'none' }}>
              <div className="styled-card">
                <div className="styled-card-media">
                  <Image src={category.imageUrl} alt={category.title} layout="fill" objectFit="cover" />
                </div>
                <div className="styled-card-content">
                  {category.title}
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
