import React from 'react'
import GelIcon from '../../../public/images/gel-icon.svg'
import DollarIcon from '../../../public/images/dolar-icon.svg'
import Image from 'next/image'

export default function CurrencyCourse({ houseID }: any) {
  return (
    <>
      <div className=" flex flex-row items-center mt-5 md:mt-0 md:pr-28">
        <span className="ml-2">{houseID.price}</span>
        <div className="ml-2 bg-[#F9C745]  rounded-xl px-3 py-2 cursor-pointer">
          <Image src={GelIcon} alt="Gel currency icon" />
        </div>
        <div className="ml-2 cursor-pointer">
          <Image src={DollarIcon} alt="Dollar currency icon" />
        </div>
        <span className="ml-5">Total Rent</span>
      </div>
    </>
  )
}
