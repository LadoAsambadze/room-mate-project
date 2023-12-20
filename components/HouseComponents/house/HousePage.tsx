import Image from 'next/image'
import React from 'react'
import DoorIcon from '../../../public/images/door.svg'
import LocationIcon from '../../../public/images/location.svg'
import ImagesPreview from '@/components/HouseComponents/SmallClientComponents/ImagesPreview'
import Link from 'next/link'
import DesktopFilter from '@/components/HouseComponents/houseFilters/DesktopFilter'
import Pagination from '../HousePagination/HousePagination'

interface ImageType {
  thumb: string
}
interface HouseType {
  room: number
  price: number
  id: string
  district: {
    title: string
  }
  images: ImageType[]
}
interface DataType {
  title: string
  id: string
}
interface FilterType {
  id: string
  title: string
  search_type: string
  data: DataType[]
}
interface HouseData {
  data: HouseType[]
  meta: any
}
interface MainFilterProps {
  house: HouseData
  filterList: FilterType
}
export default function HousePage({ house, filterList }: MainFilterProps) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-start justify-start py-2 bg-[#F7F7F7] md:px-12 lg:flex-row  lg:px-12 desktop:px-60 ">
        <div className="hidden lg:flex lg:w-[350px]">
          <DesktopFilter filterList={filterList} />
        </div>
        <div
          className={`${
            false ? 'filterBlur' : ''
          } w-full h-full flex flex-col items-center justify-start gap-6 md:grid md:grid-cols-2 md:gap-6 md:items-start lg:ml-7`}
        >
          {house.data && house.data.length > 0 ? (
            house.data.map((item, index) => (
              <Link
                href={`house/${item.id}`}
                key={index}
                className="w-[330px] bg-white  rounded-md flex flex-col  rounded-2 overflow-hidden  shadow-boxItem  md:w-full"
              >
                <ImagesPreview item={item.images} />

                <div className=" cursor-pointer">
                  <div className="flex flex-row items-center px-3 pb-2 pt-5 border-b border-[#acb2af]">
                    <Image src={DoorIcon} alt="Door Icon" />
                    <span className=" text-[black] ml-2 text-xs">
                      house rooms {item.room}
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-between px-3 py-3 ">
                    <div className="flex flex-row items-center">
                      <Image src={LocationIcon} alt="Location Icon" />
                      <span className=" text-[black] ml-2 text-xs">
                        {item.district.title}
                      </span>
                    </div>

                    <span className="text-[black] ml-2 text-xs">
                      {item.price} total rent
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>item is zero</div>
          )}
        </div>
      </div>
      <Pagination meta={house.meta} />
    </>
  )
}
