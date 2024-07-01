"use client";
import React from 'react';
import './Blog.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Image from 'next/image';
import cardsData from '../data/cardData';

const CardContainer = () => {
  return (
    <div className="mainContainer">
      <h2 className="header">Blogs</h2>
      <h4 className="subHeader">Stay updated with our latest blog posts</h4>
      <div className="dots">
        <span className="dot" style={{ backgroundColor: "#FF5733" }} />
        <span className="dot" style={{ backgroundColor: "#C70039" }} />
        <span className="dot" style={{ backgroundColor: "#900C3F" }} />
        <span className="dot" style={{ backgroundColor: "#581845" }} />
      </div>
      <div className="container">
        {cardsData.map((card, index) => (
          <Card key={index} className="customCard">
            <div className="customCardMedia">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="dateOverlay">
                <CalendarTodayIcon fontSize="small" />
                {card.date}
              </div>
            </div>
            <CardContent className="customCardContent">
              <div className="userInfo">
                <AccountCircleIcon fontSize="small" />
                <Typography className="userName">{card.author}</Typography>
              </div>
              <Typography className="title" gutterBottom variant="h6" component="div">
                {card.title}
              </Typography>
              <Typography className="description" variant="body2">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions className="customCardActions">
              <div className="readMoreText">Read more</div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
