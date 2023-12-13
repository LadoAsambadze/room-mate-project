'use client'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import '../../styles/statement.scss'

export default function SelectedImage({ houseID }: any) {
  const renderThumbs = () => {
    return houseID?.images?.map((el: any, i: any) => {
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
        {houseID?.images?.map((el: any, i: any) => {
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
