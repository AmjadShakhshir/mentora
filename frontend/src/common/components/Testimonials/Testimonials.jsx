import CallMadeIcon from '@mui/icons-material/CallMade';
import { Box, Link, Typography } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import CarouselCard from './CarouselCard';
import { testimonialsData } from './testimonialsData';
import { styles } from '../../../assets/styles/testimonials';
import NextBtn from './NextBtn';
import PreviousBtn from './PreviousBtn';

const Testimonials = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <NextBtn />,
      prevArrow: <PreviousBtn />,
      backgroundColor: '#f8f8f8',
};


  return (
    <Box component={'section'} sx={styles.section}>
        <Box component={'section'} sx={styles.textSection}>
            <Typography variant='h2' sx={styles.title}>We Believe That Your Name Should Be A Brand</Typography>
            <Typography variant='body2' sx={styles.body}>Creating A Personal Brand Can Be A Powerful Tool For Connecting With Your Audience. By Using Your Name As Your Brand, You Can Create A Sense Of Authenticity And Personality That Resonates With People.</Typography>
            <Link href="#" underline="none" variant='subtitle1' sx={styles.link}>Learn More <CallMadeIcon /></Link>
        </Box>
        <Box component={'section'} sx={styles.sliderSection}>
            <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                  <CarouselCard key={index} {...testimonial} />
                ))}
            </Slider>
        </Box>
    </Box>
  )
}

export default Testimonials