'use client'

import axios from 'axios'
import React, { useEffect } from 'react'

export default function page() {
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        'https://api.roommategeorgia.ge/users/search'
      )
      console.log(response)
    }
    getUser()
  }, [])
  return <div>page</div>
}
