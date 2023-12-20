import { cookies } from 'next/headers'

const tokenItem = cookies().get('token')

export const token = {
  headers: {
    Authorization: `Bearer ${tokenItem?.value}`,
  },
}
