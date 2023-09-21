
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
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
        centerMode= {true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
  >
    {
        products.map((data,index)=>
          <img  alt="productImg" key={index} src={data.url} />
        )
    }
 </Carousel>
    )
}

export default Slide

