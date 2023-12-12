import axios from 'axios'
import Image from 'next/image'
import FilterIcon from '../../public/images/filter-slider.svg'
import DoorIcon from '../../public/images/door.svg'
import HouseFilter from '@/components/filterServer/HouseFilter'
import LocationIcon from '../../public/images/location.svg'
import CarouselComponent from '@/components/carousel/Carousel'

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

async function getHouse() {
  const res = await axios.get('https://api.roommategeorgia.ge/flats')
  if (!res.data) {
    throw new Error('Failed to fetch data')
  }

  return res.data.data
}

export default async function Page() {
  const house: HouseType[] = await getHouse()

  return (
    <>
      <div
        className="lg:hidden"
        style={{
          position: 'absolute',
          transform: false ? 'translateX(0%)' : 'translateX(-120%)',
          zIndex: 330000,
          transition: '0.3s',
          top: 70,
        }}
      >
        <HouseFilter />
      </div>
      <>
        <div className="w-full flex  items-center justify-center bg-[#F7F7F7]  pt-5 pb-2 md:px-12 lg:px-12 lg:flex-row desktop:px-60">
          <div className="flex items-center  w-[350px] md:flex-start md:w-full lg:hidden ">
            <Image
              src={FilterIcon}
              alt="Filter Icon"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-col items-start justify-center py-2 bg-[#F7F7F7] md:px-12 lg:flex-row  lg:px-12 desktop:px-60 ">
          <div className="hidden lg:flex lg:w-[350px]">
            <HouseFilter />
          </div>
          <div
            className={`${
              false ? 'filterBlur' : ''
            } w-full h-full flex flex-col items-center justify-start gap-6 md:grid md:grid-cols-2 md:gap-6 md:items-start lg:ml-7`}
          >
            {house && house.length > 0 ? (
              house.map((item, index) => (
                <div
                  key={index}
                  className="w-[330px] bg-white  rounded-md flex flex-col  rounded-2 overflow-hidden  shadow-boxItem  md:w-full"
                >
                  <div className="w-full relative">
                    <CarouselComponent item={item.images} />
                  </div>
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

                      <span className=" text-[black] ml-2 text-xs">
                        {item.price} total rent
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>item is zero</div>
            )}
          </div>
        </div>
      </>
    </>
  )
}
