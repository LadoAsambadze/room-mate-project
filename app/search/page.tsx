import axios from 'axios'

import UserCard from '@/components/UserComponents/UserCard'
import { token } from '@/configs/token'

async function getUsers() {

  const response = await axios.get(
    `${process.env.BASE_URL}/users/search`,
    token
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
