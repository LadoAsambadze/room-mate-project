import React from 'react'

export default function page() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center pt-14 px-5 bg-[#F7F7F7]">
        <div className="bg-white flex flex-col  shadow-boxItem  w-[320px] h-[434px] px-6 pt-10  rounded-md">
          <span className="text-[#19a463] text-base text-center">Login</span>
          <div className="mt-10 mb-4 flex flex-col">
            <label className="mb-3">Phone Number</label>
            <input
              className="bg-[#f7f7f7]  border-solid px-3 py-2 border-[#ced4da] border-2 focus:outline-none"
              placeholder="Phone number"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-3">Password</label>
            <input
              className="bg-[#f7f7f7]  border-solid px-3 py-2 border-[#ced4da] border-2 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button className="bg-[#19a463] py-2 w-full text-white my-6  text-base rounded-md">
            Login
          </button>
          <button className="text-left">Registration</button>
          <button className="text-left">Password</button>
        </div>
      </div>
    </>
  )
}
