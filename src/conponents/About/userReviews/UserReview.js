"use client";
import React, { useState } from 'react';
import './UserReviews.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import reviews from '../../../data/reviews';

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
    <section className="reviewsSection">
      <h2 className="sectionTitle">Customer Reviews</h2>
      <div className="reviewGrid">
        {currentReviews.map((review, index) => (
          <div className="reviewCard" key={index}>
            <div className="reviewHeader">
              <Image className="reviewerAvatar" src={review.avatar} alt={review.name} width={50} height={50} />
              <div className="reviewerDetails">
                <h3 className="reviewerName">{review.name}</h3>
                <p className="reviewDate">{review.date}</p>
              </div>
            </div>
            <p className="reviewContent">{review.content}</p>
            <div className="starRating">
              {Array(review.rating).fill().map((_, i) => (
                <FaStar key={i} className="starIcon" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="paginationButton" onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <div className="paginationNumbers">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`paginationNumber ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageNumberClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button className="paginationButton" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default UserReviews;
