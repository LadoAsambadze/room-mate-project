import React from 'react'
import { cookies } from 'next/headers'
import { token } from '@/configs/token'

import axios from 'axios'

async function fetchData() {
  // Get the token from the cookies
  // const token = cookies().get('token')

  // // Set up the config for the axios request
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token?.value}`,
  //   },
  // }

  // Make the GET request
  const response = await axios.get(
    'https://api.roommategeorgia.ge/auth/profile',
    token
  )

  return response.data
}

export default async function page() {
  const data = await fetchData()
  console.log('data', data)

  return (
    <div>
      <h1>Profile Page!!!!!!!!!!!!</h1>
      <span>{data.firstname}</span>
    </div>
  )
}
