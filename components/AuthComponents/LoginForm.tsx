// 'use client'
// import axios from 'axios'
// import { useState } from 'react'

// export default function LoginForm() {
//   const [phone, setPhone] = useState('')
//   const [password, setPassword] = useState('')

//   const logIn = async () => {
//     const response = await axios.post(
//       'https://api.roommategeorgia.ge/auth/login',
//       {
//         phone: phone,
//         password: password,
//       }
//     )
//     localStorage.setItem('token', response.data.access_token)
//     console.log(response.data.access_token)
//   }

//   return (
//     <>
//       <div className="mt-10 mb-4 flex flex-col">
//         <label className="mb-3">Phone Number</label>
//         <input
//           name="phone"
//           className="bg-[#f7f7f7]  border-solid px-3 py-2 border-[#ced4da] border-2 focus:outline-none"
//           placeholder="Phone number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <div className="flex flex-col">
//         <label className="mb-3">Password</label>
//         <input
//           name="password"
//           type="password"
//           className="bg-[#f7f7f7]  border-solid px-3 py-2 border-[#ced4da] border-2 focus:outline-none"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button
//         onClick={() => logIn()}
//         className="bg-[#19a463] py-2 w-full text-white my-6  text-base rounded-md"
//       >
//         Login
//       </button>
//       <button className="text-left">Registration</button>
//       <button className="text-left">Forgot Password</button>
//     </>
//   )
// }
