import axios from 'axios'
import type { AuthOptions, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        phone: { label: 'phone', type: 'text', required: true },
        password: { label: 'password', type: 'string', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials.password) return null

        try {
          const response = await axios.post(
            'https://api.roommategeorgia.ge/auth/login',
            {
              phone: credentials.phone,
              password: credentials.password,
            }
          )
         

          if (response.data.access_token) {
            const token = response.data.access_token

            // Set the token in a cookie
            cookies().set('token', token, { httpOnly: true })
            return token
          }
        } catch (error) {
          console.error(error)
          console.log('hee')
        }

        return null
      },
    }),
  ],
}
