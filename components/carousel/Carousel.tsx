'use client'

import Image from 'next/image'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function CarouselComponent({ item }: any) {
  return (
    <>
      <div className="w-full h-[200px] relative">
        <Carousel responsive={responsive} infinite={true}>
          {item.map((image: any, i: any) => (
            <div
              key={i}
              style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                cursor: 'pointer',
              }}
            >
              <Image
                src={image.thumb}
                alt="House image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  )
}

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1440, min: 768 },
    items: 1,
  },
  tabletOne: {
    breakpoint: { max: 768, min: 430 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
  },
}
