'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageTypes {
  item: { thumb: string }[]
}

function ImgPreview({ item }: ImageTypes) {
  const [currentId, setCurrentId] = useState(0)

  const handleNext = () => {
    if (currentId < item.length - 1) {
      setCurrentId(currentId + 1)
    }
  }

  const handlePrev = () => {
    if (currentId > 0) {
      setCurrentId(currentId - 1)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <button
        onClick={handlePrev}
        style={{ zIndex: 1, position: 'absolute', left: 0, top: '50%' }}
      >
        Prev
      </button>
      <img
        src={item[currentId].thumb}
        style={{
          minWidth: '100%',
          scrollSnapAlign: 'start',
        }}
       
        alt="House Image"
      />

      <button
        onClick={handleNext}
        style={{ zIndex: 1, position: 'absolute', right: 0, top: '50%' }}
      >
        Next
      </button>
    </div>
  )
}

export default ImgPreview
