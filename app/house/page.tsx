import axios from 'axios'
import MobileFilter from '@/components/HouseComponents/houseFilters/MobileFilter'
import queryString from 'query-string'
import HousePage from '@/components/HouseComponents/house/HousePage'

async function getFilters() {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/flats/filters`)
    if (!res.data) {
      throw new Error('Failed to fetch data')
    }
    return res.data
  } catch (error) {
    console.error(error)
    return []
  }
}

async function getHouse(searchParams: string) {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/flats?${searchParams}`)

    if (!res.data) {
      throw new Error('Failed to fetch data')
    }

    return res.data
  } catch (error) {
    console.error(error)
    return []
  }
}
export default async function Page({ searchParams }: any) {
  const house = await getHouse(queryString.stringify(searchParams))
  const filterList = await getFilters()

  return (
    <>
      <MobileFilter filterList={filterList} />
      <HousePage house={house} filterList={filterList} />
      <></>
    </>
  )
}
