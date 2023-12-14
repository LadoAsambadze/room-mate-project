'use client'

import Image from 'next/image'

import { useState } from 'react'
import FilterIcon from '../../public/images/filter-slider.svg'
import FilterLoop from '../../public/images/filter-loop.png'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import ArrowDown from '../../public/images/arrow-down.png'

export default function MobileFilter({ filterList }: any) {
  const [filter, setFilter] = useState(false)
  const [select, setSelect] = useState(false)
  const [rangeValues, setRangeValues] = useState({})
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const router = useRouter()
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (e.target.checked) {
      setSelectedItems((prevItems) => [...prevItems, id])
    } else {
      setSelectedItems((prevItems) =>
        prevItems.filter((itemId) => itemId !== id)
      )
    }
  }

  const handleRangeChange = (title: string, event: any) => {
    setRangeValues((prevValues) => ({
      ...prevValues,
      [title]: event.target.value,
    }))
  }

  const handleClick = () => {
    const districtQuery = `districts=${selectedItems.join('%2C')}`
    const query = `?${queryString.stringify(rangeValues)}&${districtQuery}`
    router.push(`/house${query}`)
  }

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
            filterList.map((item: any, index: number) => (
              <div key={index} className="flex flex-col w-full">
                <label htmlFor={item.title} className="text-base">
                  {item.title}
                </label>
                <div
                  style={{ display: select ? 'block' : 'none' }}
                  className="absolute mr-2 bg-[#d6d1d1] rounded-sm px-3 py-3 top-20 lg:top-[93px] w-[93%] h-[290px] overflow-y-scroll"
                >
                  {filterList[0].data &&
                    filterList[0].data.map((obj: any, index: number) => (
                      <label key={index} className="flex flex-row">
                        <input
                          type="checkbox"
                          className="mr-1"
                          onChange={(e) => handleCheckboxChange(e, obj.id)}
                        />
                        {obj.title}
                      </label>
                    ))}
                </div>
                {item.search_type === 'range' && (
                  <div className="flex flex-row justify-between items-center w-full overflow-hidden lg:justify-between">
                    <input
                      type="number"
                      placeholder="from"
                      className="w-[50%] mr-2 lg:mr-3 mt-1 bg-[#E3E3E3] rounded-md outline-none no-spinners  mb-[10px] px-2 py-1 text-[14px] 
         lg:px-3 lg:py-2 "
                      onChange={(e) =>
                        handleRangeChange(
                          item.title === 'საძინებელი'
                            ? 'bedroom_from'
                            : item.title === 'ოთახი'
                            ? 'room_from'
                            : item.title === 'ფასი'
                            ? 'price_from'
                            : item.title === 'საერთო ფართი'
                            ? 'area_from'
                            : item.title,
                          e
                        )
                      }
                    />

                    <input
                      type="number"
                      placeholder="to"
                      className="w-[50%] bg-[#E3E3E3] mt-1 rounded-md  outline-none no-spinners  mb-[10px] px-2 py-1 text-[14px] lg:px-3 lg:py-2 "
                      onChange={(e) =>
                        handleRangeChange(
                          item.title === 'საძინებელი'
                            ? 'bedroom_to'
                            : item.title === 'ოთახი'
                            ? 'room_to'
                            : item.title === 'ფასი'
                            ? 'price_to'
                            : item.title === 'საერთო ფართი'
                            ? 'area_to'
                            : item.title,
                          e
                        )
                      }
                    />
                  </div>
                )}

                {item.search_type === 'choice' && (
                  <div
                    onClick={() => setSelect(!select)}
                    className="w-full bg-[#e3e3e3] cursor-pointer mb-[10px] mt-1 px-3 py-[8px] flex flex-row justify-between items-center overflow-hidden rounded-md lg:px-3 lg:py-3"
                  >
                    <button className="text-xs">Choice</button>
                    <Image
                      src={ArrowDown}
                      alt="Arrow down icon"
                      style={{
                        transform: select ? 'none' : 'rotate(180deg)',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          <div
            onClick={() => {
              setFilter(!filter)
              handleClick()
            }}
            className="w-full  rounded-md bg-[#19A463]  py-3 flex flex-row items-center justify-center mt-5 cursor-pointer"
          >
            <Image
              src={FilterLoop}
              alt="Filter loop icon"
              width={20}
              height={20}
            />
            <span className="ml-2 text-white text-xs ">Filter</span>
          </div>
        </div>
      </div>
    </>
  )
}
