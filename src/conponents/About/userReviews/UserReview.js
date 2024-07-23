"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaUsers } from 'react-icons/fa';
import Image from 'next/image';
import reviews from '../../../data/reviews';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

const ReviewsSection = styled.section`
  max-width: 1200px;
  margin: 100px auto;
  padding: 0 15px;
  font-family: 'Roboto', sans-serif;


  @media (min-width: ${breakpoints.tablet}) {
    // margin: 30px auto
    padding: 0 20px;
  }

  @media (min-width: ${breakpoints.laptop}) {
    // margin: 40px auto;
  }
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 100px;

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
 font-size: 2rem;
  font-weight: 800;
  font-family: Arial, sans-serif;

  color:#003366;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2.5rem;
  }
`;

const SubHeading = styled.p`
  font-size: 1rem;
  font-weight: 400;

  color: #e91e63;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-buttom:100px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
 font-size: 1rem;
  font-weight: 400;
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 50px;
  margin-top: 70px;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 30px;
  }
`;

const ReviewCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #f9f9f9;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 20px;
  }
`;

const QuoteIcon = styled(FaQuoteLeft)`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #F7B731;
  opacity: 0.2;
  font-size: 1.2rem;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ReviewerAvatar = styled(Image)`
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid gray;
`;

const ReviewerDetails = styled.div``;

const ReviewerName = styled.h3`
  font-size: 1rem;
  color: #003366;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

const ReviewDate = styled.p`
  font-size: 0.8rem;
  color: #e91e63;
  margin: 5px 0 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`;

const ReviewContent = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`;

const StarRating = styled.div`
  color: #FFD700;
  font-size: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const PaginationButton = styled.button`
  background: #f9f9f9;
  color: #F73E3C;
  border: 1px solid #555555;;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 0.9rem;

  &:hover:not(:disabled) {
    background: #ccc;
  }

  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 8px 15px;
    font-size: 1rem;
  }
`;

const PaginationNumbers = styled.div`
  display: flex;
  gap: 5px;
`;

const PageNumber = styled.button`
  background: ${props => props.active ? '#F73E3C' : 'white'};
  color: ${props => props.active ? 'white' : '#FF6B6B'};
  border: 1px solid #f5f5f5;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover:not(:disabled) {
    background: #FF6B6B;
    color: white;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;

const UserReviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageNumberClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ReviewsSection>
      <HeaderContainer>
        <SectionTitle>
          <FaUsers /> What Our Customers Say
        </SectionTitle>
        <SubHeading>
          <FaStar /> Read authentic experiences from our valued clients <FaStar />
        </SubHeading>
      </HeaderContainer>
      <ReviewGrid>
        {currentReviews.map((review, index) => (
          <ReviewCard key={index}>
            <QuoteIcon />
            <ReviewHeader>
              <ReviewerAvatar src={review.avatar} alt={review.name} width={50} height={50} />
              <ReviewerDetails>
                <ReviewerName>{review.name}</ReviewerName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewerDetails>
            </ReviewHeader>
            <ReviewContent>{review.content}</ReviewContent>
            <StarRating>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < review.rating ? '#FFA500' : '#e4e5e9'} />
              ))}
            </StarRating>
          </ReviewCard>
        ))}
      </ReviewGrid>
      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          <FaChevronLeft />
        </PaginationButton>
        <PaginationNumbers>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumber
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageNumberClick(index + 1)}
            >
              {index + 1}
            </PageNumber>
          ))}
        </PaginationNumbers>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          <FaChevronRight />
        </PaginationButton>
      </PaginationContainer>
    </ReviewsSection>
  );
};

export default UserReviews;