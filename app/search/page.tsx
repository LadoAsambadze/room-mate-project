import axios from 'axios'
import UserCard from '@/components/UserComponents/UserCard'
import { cookies } from 'next/headers'
import queryString from 'query-string'

async function getUsers(searchParams: string) {
  try {
    const token = cookies().get('token')

    const config = {
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    }

    const response = await axios.get(
      `${process.env.BASE_URL}/users/search?${searchParams}`,
      config
    )

    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function page({ searchParams }: any) {
  const users = await getUsers(queryString.stringify(searchParams))
  console.log('heeeeeeeeeeeeeee', users)

  return (
    <>
      <div
        className="px-3 pt-12 w-full min-h-screen flex flex-col  items-center bg-[#F7F7F7] gap-y-4
      sm:px-10 overflow-x-hidden"
      >
        <UserCard users={users} />
      </div>
    </>
  )
}
