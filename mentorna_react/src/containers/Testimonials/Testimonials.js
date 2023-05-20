import { Box, Link, Typography } from '@mui/material'
import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CarouselCard from './CarouselCard';
import { images } from '../../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Testimonials = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

  return (
    <Box component={'section'} sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f8f8f8',
        padding: '60px',
    }}>
        <Box component={'section'} 
        maxWidth= '50%'>
            <Typography variant='h2' sx={{
                fontFamily: 'Gotham',
                fontWeight: 700,
            }}>We Believe That Your Name Should Be A Brand</Typography>
            <Typography variant='body2' sx={{
                fontWeight: 300
            }}>Creating A Personal Brand Can Be A Powerful Tool For Connecting With Your Audience. By Using Your Name As Your Brand, You Can Create A Sense Of Authenticity And Personality That Resonates With People.</Typography>
            <Link href="#"
            underline="none" variant='subtitle2' color={'#F5A34C'} 
            sx={{ fontFamily: 'Gotham', 
                  fontWeight: 600,
            }}>Learn More <CallMadeIcon /></Link>
        </Box>
        <Box component={'section'} maxWidth= '50%'>
            <Slider {...settings}>
                <CarouselCard profileImg={images.profile1} name={'Maysara Hammouda'} title={'Co-Founder Of Predictiva'} followers={'12K Followers'} fund={'$600K Funded'} />
                <CarouselCard profileImg={images.profile2} name={'Ashraf Kotb'} title={'Co-Founder Of Predictiva'} followers={'96K Followers'} fund={'$600K Raised'} />
                <CarouselCard profileImg={images.profile1} name={'Ahmed Mahmoud'} title={'Co-Founder Of MOP'} followers={'42K Followers'} fund={'$1M Funded'} />
                <CarouselCard profileImg={images.profile2} name={'Jussi Heponen'} title={'Co-Founder Of Predictiva'} followers={'32K Followers'} fund={'$60K Funded'} />
            </Slider>
        </Box>
    </Box>
  )
}

export default Testimonials