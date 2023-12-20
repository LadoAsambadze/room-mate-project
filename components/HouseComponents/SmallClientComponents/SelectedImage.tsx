'use client'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../../../styles/statement.scss'

interface ImageType {
  thumb: string
  original: string
}

interface HouseTypes {
  houseID: { images: ImageType[] }
}

export default function SelectedImage({ houseID }: HouseTypes) {
  const renderThumbs = () => {
    return houseID?.images?.map((el, i) => {
      return (
        <div key={i}>
          <img src={el.thumb} />
        </div>
      )
    })
  }

  return (
    <div className="houseStatement">
      <Carousel infiniteLoop swipeable emulateTouch renderThumbs={renderThumbs}>
        {houseID?.images?.map((el, i) => {
          return (
            <div key={i}>
              <img src={el.original} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
