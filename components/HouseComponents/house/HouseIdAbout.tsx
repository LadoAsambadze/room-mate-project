import React from 'react'
import LocationIcon from '../../../public/images/location.svg'
import PhoneIcon from '../../../public/images/phone.svg'
import Area from '../../../public/images/area.svg'
import Ledder from '../../../public/images/ledder.svg'
import Door from '../../../public/images/door.svg'
import Bed from '../../../public/images/bed.svg'
import Avaliable from '../../../public/images/avaliable.svg'
import None from '../../../public/images/none.svg'
import Image from 'next/image'
import CurrencyCourse from '../SmallClientComponents/CurrencyCourse'

export default function HouseIdAbout({ houseID }: any) {
  const {
    hot_water,
    balcony,
    central_heating,
    gas,
    bathroom,
    heating,
    internet,
    elevator,
    workspace,
  } = houseID
  return (
    <>
      <div className="flex flex-col  items-center w-full">
        <div
          id="Location Price Section"
          className="w-full flex flex-col pt-5  md:flex-row  md:justify-between md:items-start"
        >
          <div>
            <div className="w-full flex flex-row items-center ">
              <Image src={LocationIcon} alt="Location Icon" />
              <span className="ml-4">
                {houseID.district.title} {houseID.street}
              </span>
            </div>
            <div className="w-60 flex flex-row px-7 py-2 bg-[#FFE9AE] rounded-lg mt-4 md:mt-6  ">
              <Image src={PhoneIcon} alt="Phone Icon" />
              <div className="ml-4">{houseID.author_phone}</div>
            </div>
          </div>
          <CurrencyCourse houseID={houseID} />
        </div>
        <div className=" w-full h-[1px] mt-6 bg-[#E3E3E3]"></div>
        <div
          id="Info Section"
          className="w-full flex flex-col pt-5 md:grid md:grid-cols-3 md:gap-y-6  "
        >
          <div className="flex flex-row w-full mb-4">
            <Image src={Area} alt="Are sq icon" />
            <span className="ml-3">Space: {houseID.area}</span>
          </div>
          <div className="flex flex-row w-full mb-4">
            <Image src={Ledder} alt="Ladder icon" />
            <span className="ml-3">
              Floor: {houseID.total_floors}/{houseID.floor}
            </span>
          </div>
          <div className="flex flex-row w-full mb-4">
            <Image src={Door} alt="Door icon" />
            <span className="ml-3">Number of rooms: {houseID.room}</span>
          </div>
          <div className="flex flex-row w-full mb-4">
            <Image src={Bed} alt="Bed icon" />
            <span className="ml-3">
              Rented for (max persons): {houseID.capacity}
            </span>
          </div>
        </div>
        <div className="w-full h-[1px] mt-6 bg-[#E3E3E3]"></div>
        <div id="Content" className="w-full flex flex-col pt-5 ">
          <span>{houseID.description}</span>
          <div className="w-full h-[1px] mt-6 bg-[#E3E3E3]"></div>
        </div>
        <div
          id="Specifications"
          className="w-full flex flex-col pt-5 md:grid  grid-cols-3 "
        >
          {Object.entries({
            hot_water,
            balcony: balcony > 0 ? balcony : null,
            central_heating,
            gas,
            bathroom,
            heating,
            internet,
            elevator,
            workspace,
          }).map(([key, value]) => (
            <div key={key} className="flex flex-row w-full mb-4">
              <Image src={value ? Avaliable : None} alt={`${key} Icon`} />
              <span className="ml-2">
                {key.replace(/_/g, ' ')}
                {value ? (typeof value === 'number' ? value : null) : ''}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
