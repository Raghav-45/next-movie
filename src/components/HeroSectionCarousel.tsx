import React, { FC } from 'react'
import { Carousel } from './ui/carousel'

interface HeroSectionCarouselProps {
  children: React.ReactNode
}

const HeroSectionCarousel: FC<HeroSectionCarouselProps> = ({ children }) => {
  return (
    <Carousel
      opts={{
        align: 'center',
        skipSnaps: true,
        slidesToScroll: 'auto',
      }}
      className="w-full"
    >
      {children}
    </Carousel>
  )
}

export default HeroSectionCarousel
