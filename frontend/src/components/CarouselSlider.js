import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
}

const CarouselSlider = ({ children, deviceType }) => {
  return (
    <Carousel
      swipeable={false}
      ssr={true}
      responsive={responsive}
      partialVisible={true}
      draggable={false}
      autoPlay={deviceType !== 'mobile' ? true : false}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      stopOnHover={true}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  )
}

export default CarouselSlider
