import Image from 'next/image'
import AvatarImage from '../../public/images/avatar.png'

export default function UserID({ user }: any) {
  return (
    <>
      <div className="bg-[#F7F7F7] w-full min-h-screen flex flex-col px-12">
        <div id="First Part">
          <div className="flex flex-row w-full py-4 items-center">
            <div className="w-[120px] h-[120px] relative rounded-full">
              <Image
                className="rounded-full"
                src={user?.profile_image ? user.profile_image : AvatarImage}
                alt="Profile Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="ml-6">
              {user?.firstname} {user?.lastname}
            </span>
          </div>
          <div id="line" className="h-[1px] bg-[gray] w-full"></div>
          <div className="flex flex-col w-full my-3">
            <span>About</span>
            <p className="mt-3">{user?.about_me}</p>
          </div>
          <div id="line" className="h-[1px] bg-[gray] w-full"></div>
          <div className="flex flex-col items-center pm-3 ">
            <span className="mt-3">
              To view the contacts, please send a request.
            </span>
            <button className="w-full bg-[#19a463] mt-3 flex items-center justify-center text-white py-2 cursor-pointer">
              Request Contact
            </button>
          </div>
          <div id="line" className="h-[1px] bg-[gray] w-full"></div>
        </div>
        <div id="Second Part" className="py-3 flex flex-col">
          <div className="bg-white rounded-sm flex flex-col">
            <span>In which district would you like to find an apartment?</span>
            <div className="flex flex-row w-full mt-2">
              <span>{user?.answeredAnswers[0].question_id}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
