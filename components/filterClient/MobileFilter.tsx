'use client'

import Image from 'next/image'
import HouseSelect from './HouseSelect'
import { useState } from 'react'
import FilterIcon from '../../public/images/filter-slider.svg'
import FilterLoop from '../../public/images/filter-loop.png'

export default function MobileFilter({ filterList }: any) {
  const [filter, setFilter] = useState(false)

  return (
    <>
      <div className="w-full flex  items-center justify-center bg-[#F7F7F7]  pt-5 pb-2 md:px-12 lg:px-12 lg:flex-row destkop:px-60">
        <div className="flex items-center  w-[350px] md:flex-start md:w-full lg:hidden ">
          <Image
            onClick={() => setFilter(!filter)}
            src={FilterIcon}
            alt="Filter Icon"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div
        className="lg:hidden"
        style={{
          position: 'absolute',
          transform: filter ? 'translateX(0%)' : 'translateX(-120%)',
          zIndex: 330000,
          transition: '0.3s',
          top: 70,
        }}
      >
        <div
          className=" relative overflow-hidden w-screen bg-white px-4 py-4 rounded-md  rounded-t-none flex flex-col items-start h-full justify-between
   xl:bg-[#F7F7F7]  "
        >
          {filterList &&
            filterList.map((item: any, index: any) => (
              <div key={index} className="flex flex-col w-full">
                <label htmlFor={item.title} className="text-base">
                  {item.title}
                </label>
                <HouseSelect item={item} />
              </div>
            ))}
          <div className="w-full  rounded-md bg-[#19A463]  py-3 flex flex-row items-center justify-center mt-5 cursor-pointer">
            <Image
              src={FilterLoop}
              alt="Filter loop icon"
              width={20}
              height={20}
            />
            <span
              className="ml-2 text-white text-xs "
              onClick={() => {
                setFilter(!filter)
              }}
            >
              Filter
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
