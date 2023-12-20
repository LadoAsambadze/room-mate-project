import axios from 'axios'
import { cookies } from 'next/headers'
import UserID from '@/components/UserComponents/UserID'

interface Params {
  userID: string
}
async function getUserID(userID: string) {
  const token = cookies().get('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  }
  try {
    const res = await axios.get(
      `${process.env.BASE_URL}/users/profile/${userID}`,
      config
    )
    return res.data
  } catch (error) {
    console.error(`Error fetching user ID: ${error}`)
  }
}

export default async function page({ params }: { params: Params }) {
  const user = await getUserID(params.userID)

  return (
    <>
      <UserID user={user} />
    </>
  )
}
