import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AvatarImg from '../../public/images/avatar.png'
import Location from '../../public/images/location.svg'
import Favourite from '../../public/images/fav.png'
import Pagination from '../Pagination/Pagination'

interface Data {
  firstname: string
  age: number
  profile_image?: string
  about_me: string
  suitableDistricts: string[]
  id: string
}

interface User {
  data: Data[]
  meta: any
}

export default function UserCard({ users }: { users: User }) {
  return (
    <>
      <div
        className="px-3 pt-12 w-full min-h-screen flex flex-col  items-center bg-[#F7F7F7] gap-y-4
      sm:px-10"
      >
        {users.data.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#FFF] flex flex-col py-1 px-2 shadow-userBoxShadow md:w-[500px]"
          >
            <div
              id="First Part"
              className="w-full flex flex-row justify-between items-center"
            >
              <div>
                <span className="text-xs">{item.firstname}</span>
                <span className="ml-3 text-xs">{item.age} Years old</span>
              </div>
              <span></span>
            </div>
            <div
              id="Second Part"
              className="w-full h-[100px]  flex flex-row  mt-2"
            >
              <div
                style={{
                  position: 'relative',
                  width: '130px',
                  height: '100px',
                }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={
                    item && item.profile_image ? item.profile_image : AvatarImg
                  }
                  alt="Profile Image"
                />
              </div>

              <div className="flex border-t-2 border-b-2 w-full ml-1  overflow-hidden            ">
                <span className="text-xs overflow-ellipsis mt-1 ml-1">
                  {item.about_me}
                </span>
              </div>
            </div>
            <div
              id="Thirth part"
              className="w-full flex flex-row items-center justify-between mt-3"
            >
              <div className=" flex items-center">
                <Image
                  src={Location}
                  width={13}
                  height={18}
                  alt="Location Icon"
                />
                <div className="ml-2 w-[140px] overflow-hidden whitespace-nowrap   overflow-ellipsis">
                  {item.suitableDistricts.map((el, i) => (
                    <span key={i} className="text-xs">
                      {el} {i < item.suitableDistricts.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
              <div className=" flex items-center">
                <Image
                  src={Favourite}
                  width={13}
                  height={18}
                  alt="Favourite click icon"
                />
                <span className="ml-2 text-xs">Favourite</span>
                <Link
                  href={`/search/${item.id}`}
                  className="ml-2 text-xs  underline"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Pagination meta={users.meta} />
      </div>
    </>
  )
}
