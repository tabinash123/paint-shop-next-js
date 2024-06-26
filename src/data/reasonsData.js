import React from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SupportIcon from '@mui/icons-material/Support';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';



const reasonsData = [
  {
    icon: <VerifiedUserIcon fontSize="large" />,
    title: "Trusted Quality",
    description: "We provide the highest quality products that meet industry standards.",
  },
  {
    icon: <ThumbUpIcon fontSize="large" />,
    title: "Customer Satisfaction",
    description: "Our customers' satisfaction is our top priority.",
  },
  {
    icon: <SupportIcon fontSize="large" />,
    title: "24/7 Support",
    description: "We offer round-the-clock support to assist you whenever you need it.",
  },
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Fast Delivery",
    description: "We ensure quick and safe delivery of your orders.",
  },
];

export default reasonsData;