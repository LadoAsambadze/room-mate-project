import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AvatarImg from '../../public/images/avatar.png'
import Location from '../../public/images/location.svg'
import Favourite from '../../public/images/fav.png'

interface User {
  firstname: string
  age: number
  profile_image?: string
  about_me: string
  suitableDistricts: string[]
  id: string
}

export default function UserCard({ users }: { users: User[] }) {
  return (
    <>
      <div className="px-3 pt-12 w-full min-h-screen flex flex-col  items-center bg-[gray] gap-y-4">
        {users.map((item, index) => (
          <div
            key={index}
            className="w-[500px]  bg-white flex flex-col py-1 px-2  "
          >
            <div
              id="First Part"
              className="w-full flex flex-row justify-between items-center"
            >
              <div>
                <span>{item.firstname}</span>
                <span className="ml-3">{item.age}</span>
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

              <div className="flex border-t-2 border-b-2 w-full ml-1  overflow-hidden ovs n             ">
                <span>{item.about_me}</span>
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
                <div className="ml-2 w-[170px] overflow-hidden whitespace-nowrap   overflow-ellipsis">
                  {item.suitableDistricts.map((el, i) => (
                    <span key={i}>
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
                <span className="ml-2">Favourite</span>
                <Link href={`/search/${item.id}`} className="ml-2">
                  View details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
