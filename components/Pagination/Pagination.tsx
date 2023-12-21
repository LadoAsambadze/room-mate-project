'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Pagination({ meta }: any) {
  const router = useRouter()
  const { page, pageCount } = meta

  const handlePagination = (newPage: number) => {
    router.push(`?page=${newPage}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Calculate the range of pages to display
  const startPage = Math.max(1, page - 1)
  const endPage = Math.min(pageCount, startPage + 2)

  return (
    <div className="flex justify-center my-4">
      {page > 1 && (
        <button
          onClick={() => handlePagination(Number(page) - 1)}
          className="mx-1 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
      )}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((num) => (
        <button
          key={num}
          onClick={() => handlePagination(Number(page) + 1)}
          className={`mx-1 px-4 py-2 rounded ${
            num === Number(page)
              ? 'bg-blue-500 text-white'
              : 'bg-white text-black'
          }`}
        >
          {num}
        </button>
      ))}
      {page < pageCount && (
        <button
          onClick={() => handlePagination(Number(page) + 1)}
          className="mx-1 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      )}
    </div>
  )
}
