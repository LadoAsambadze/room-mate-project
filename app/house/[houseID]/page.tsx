import axios from 'axios'
import LocationIcon from '../../../public/images/location.svg'
import PhoneIcon from '../../../public/images/phone.svg'
import GelIcon from '../../../public/images/gel-icon.svg'
import DollarIcon from '../../../public/images/dolar-icon.svg'
import Area from '../../../public/images/area.svg'
import Ledder from '../../../public/images/ledder.svg'
import Door from '../../../public/images/door.svg'
import Bed from '../../../public/images/bed.svg'
import Avaliable from '../../../public/images/avaliable.svg'
import None from '../../../public/images/none.svg'
import Image from 'next/image'

interface Params {
  houseID: string
}

async function getHouseId(houseID: string) {
  try {
    const res = await axios.get(
      `https://api.roommategeorgia.ge/flats/view/${houseID}`
    )
    if (!res.data) {
      throw new Error('Failed to fetch data')
    }
    return res.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function HouseID({ params }: { params: Params }) {
  const houseID = await getHouseId(params.houseID)

  
  return (
    <>
      <div className=" py-4 px-8 w-full min-h-screen bg-[#F7F7F7]  desktop:px-[270px]">
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
          <div id="Specifications" className="w-full flex flex-col pt-5 ">
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.hot_water ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Hot Water</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.balcony > 0 ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Balcony: {houseID.balcony}</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.central_heating ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Central Heating</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.gas ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Gas</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.bathroom > 0 ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Bathroom {houseID.bathroom}</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.heating ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Heating</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.internet ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Internet</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.elevator ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Elevator</span>
            </div>
            <div className="flex flex-row w-full mb-4">
              <Image
                src={houseID.workspace ? Avaliable : None}
                alt="Avaliable Icon"
              />
              <span className="ml-2">Work Space</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
