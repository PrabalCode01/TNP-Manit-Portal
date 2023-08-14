import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from '@mui/material';
import manit1 from '../assets/manit2.png'
import manit2 from '../assets/manit3.jpeg'
import manit3 from '../assets/manit4.jpeg'
import manit4 from '../assets/manitmid.jpeg'



const Image = styled('img')({
    width:'100%',
    height:500
    
})

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


  const bannerdata=[
    {id:1, url:manit4},
    {id:2, url:manit2},
    {id:3, url:manit3},
    {id:4, url:manit1}

  ]

const Banner = () => {
  return (
   <Carousel responsive={responsive}

   dotListClass="custom-dot-list-style"
   itemClass="carousel-item-padding-40-px"
   containerClass="carousel-container"
  autoPlay={true}
  autoPlaySpeed={2000}
  infinite={true}
   >
    
    {
        bannerdata.map(data =>(
            <Image src={data.url} alt="banner" />
        ))
    }

   </Carousel>
  )
}

export default Banner
