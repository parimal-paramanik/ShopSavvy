import {styled} from '@mui/material'
import React from 'react'
// importing Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// importing banner data
import { bannerData } from '../../constant/data';
// imporing responsiveness
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 170,
        // width:"90%"
    }
}));

const Banner = () => {
  return (
    <Carousel 
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        ssr={true}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
      {
        bannerData.map((data,index)=>
         <Image key={index} src= {data.url} alt= "bannerimg"/>
        )
      }
    </Carousel>
  )
}

export default Banner
