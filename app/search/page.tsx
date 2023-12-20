import axios from 'axios'

import UserCard from '@/components/UserComponents/UserCard'

import { cookies } from 'next/headers'

async function getUsers() {
  const token = cookies().get('token')

  const config = {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  }

  const response = await axios.get(
    `${process.env.BASE_URL}/users/search`,
    config
  )
  return response.data.data
}

export default async function page() {
  const users = await getUsers()

  return (
    <>
      <UserCard users={users} />
    </>
  )
}
