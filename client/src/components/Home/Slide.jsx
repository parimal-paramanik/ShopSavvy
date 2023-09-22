
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Button, Divider, Box, Typography, styled } from '@mui/material';
// styles 
const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;
const TimeStyles = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`
const TimerBox = styled(Box)`
    // color: #7f7f7f;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;
const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`
const Btn = styled(Button)`
    margin-left: auto;
    // background-color: #2874f0;
    border-radius: 3px;
    font-size: 12px;
`;
const Image = styled('img')({
  width: 'auto',
  height: 150
})
// imporing responsiveness
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 const Slide= ({products})=>{
  const countdownUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  // rendered to modify the countDown

  const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours} : {minutes} : {seconds}  remaining</Box>;
};

    return (
 <Component>
  <TimeStyles>
    <DealText>
      Deal of The Day
    </DealText>
    <TimerBox>
      <img src= {countdownUrl} alt="countdown watch"  style={{width: 20}}/>
      <Countdown date={Date.now() + 8.64e+7} renderer = {renderer} />
    </TimerBox>
      <Btn variant="contained" >all Deal</Btn>

  </TimeStyles>
  <Divider/>
  <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        ssr={true}
        keyBoardControl={true}
        centerMode= {true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
  >
    {
        products.map((data,index)=>(
          <Box  textAlign="center" style={{ padding: '25px 15px' }}>
          <Image  alt="productImg" key={index} src={data.url} />
          </Box>
        ))
    }
 </Carousel>
 </Component>
    )
}

export default Slide

