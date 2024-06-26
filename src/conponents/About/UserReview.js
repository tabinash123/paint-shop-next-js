"use client"
import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa'; // Star icon for ratings
import Image from 'next/image';

// --- Styled Components ---
const ReviewsSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f0f0f0; /* Light grey background */
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Playfair Display", serif;
  font-weight: 600;
  text-align: center;
  color: #333; /* Dark grey color */
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    font-size: 2.25rem;
  }
  @media (max-width: 992px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const ReviewCard = styled.div`
  padding: 2rem;
  background-color: #fff; /* White background for cards */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    padding: 1.75rem;
  }
  @media (max-width: 992px) {
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ReviewerAvatar = styled(Image)`
  border-radius: 50%;
  margin-right: 1rem;
`;

const ReviewerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewerName = styled.h3`
  font-weight: 600;
  font-size: 1.1rem;
  color: #333; /* Dark grey color */
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

const ReviewDate = styled.p`
  color: #999; /* Light grey color */
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 0.85rem;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const ReviewContent = styled.p`
  color: #555; /* Medium grey color */
  line-height: 1.6;
  margin-top: 1rem;

  @media (max-width: 1200px) {
    font-size: 0.95rem;
  }
  @media (max-width: 992px) {
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

const StarIcon = styled(FaStar)`
  color: #ffc107; /* Gold color for stars */
  margin-right: 0.25rem;

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

// --- UserReviews Component ---
const UserReviews = () => {
  const reviews = [
    {
      avatar: '/path/to/avatar1.jpg',
      name: 'Arjun Thapa',
      date: 'June 15, 2024',
      rating: 5,
      content: 'The quality of the paint is top-notch and the customer service was outstanding.'
    },
    {
      avatar: '/path/to/avatar2.jpg',
      name: 'Sita Gurung',
      date: 'May 22, 2024',
      rating: 4,
      content: 'SNS Paints has an excellent selection of colors and their staff is very knowledgeable.'
    },
    {
      avatar: '/path/to/avatar3.jpg',
      name: 'Ramesh Shrestha',
      date: 'April 10, 2024',
      rating: 5,
      content: 'The paint is of excellent quality and my house looks amazing.'
    },
    {
      avatar: '/path/to/avatar4.jpg',
      name: 'Nisha Rai',
      date: 'March 5, 2024',
      rating: 4,
      content: 'Great products and the delivery was fast. Will definitely buy again.'
    },
    {
      avatar: '/path/to/avatar5.jpg',
      name: 'Binod Maharjan',
      date: 'February 20, 2024',
      rating: 5,
      content: 'Highly recommend SNS Paints for their exceptional quality and service.'
    },
    {
      avatar: '/path/to/avatar6.jpg',
      name: 'Pratima KC',
      date: 'January 15, 2024',
      rating: 4,
      content: 'I love the wide range of colors available. The staff were very helpful.'
    },
    // Add more reviews as needed
  ];

  return (
    <ReviewsSection>
      <SectionTitle>Customer Reviews</SectionTitle>
      <ReviewGrid>
        {reviews.map((review, index) => (
          <ReviewCard key={index}>
            <ReviewHeader>
              <ReviewerAvatar src={review.avatar} alt={review.name} width={50} height={50} />
              <ReviewerDetails>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewerDetails>
            </ReviewHeader>
            <ReviewContent>{review.content}</ReviewContent>
            <StarRating>
              {Array(review.rating).fill().map((_, i) => (
                <StarIcon key={i} />
              ))}
            </StarRating>
          </ReviewCard>
        ))}
      </ReviewGrid>
    </ReviewsSection>
  );
};

export default UserReviews;
