import axios from 'axios'
import SelectedImage from '@/components/HouseComponents/SmallClientComponents/SelectedImage'
import HouseIdAbout from '@/components/HouseComponents/house/HouseIdAbout'

interface Params {
  houseID: string
}

async function getHouseId(houseID: string) {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/flats/view/${houseID}`)
    if (!res.data) {
      throw new Error('Failed to fetch data')
    }
    return res.data
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function HouseID({ params }: { params: Params }) {
  const houseID = await getHouseId(params.houseID)

  return (
    <>
      <div className=" py-4 px-8 w-full min-h-screen bg-[#F7F7F7]  desktop:px-[270px] overflow-x-hidden">
        <SelectedImage houseID={houseID} />
        <HouseIdAbout houseID={houseID} />
      </div>
    </>
  )
}
