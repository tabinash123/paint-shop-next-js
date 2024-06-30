"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa'; // Star icon for ratings
import Image from 'next/image';
import reviews from '../../data/reviews'

// --- Styled Components ---
const ReviewsSection = styled.section`
  padding: 5rem 1rem;
  background-color: #f0f0f0; /* Light grey background */

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
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
  color: #555;
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

// --- UserReviews Component ---
const UserReviews = () => {
 

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = window.innerWidth <= 768 ? 2 : 3;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <ReviewsSection>
      <SectionTitle>Customer Reviews</SectionTitle>
      <ReviewGrid>
        {currentReviews.map((review, index) => (
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
      <Pagination>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <PaginationButton onClick={handleNextPage} disabled={indexOfLastReview >= reviews.length}>
          Next
        </PaginationButton>
      </Pagination>
    </ReviewsSection>
  );
};

export default UserReviews;
