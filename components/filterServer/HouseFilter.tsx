import FilterLoop from "../../public/images/filter-loop.png";
import Image from "next/image";
import axios from "axios";

import HouseSelect from "../filterClient/HouseSelect";

interface DataType {
  title: string;
  id: string;
}
interface FilterType {
  id: string;
  title: string;
  search_type: string;
  data: DataType[];
}

async function getFilters() {
  const res = await axios.get("https://api.roommategeorgia.ge/flats/filters");
  if (!res.data) {
    throw new Error("Failed to fetch data");
  }
  return res.data;
}

export default async function HouseFilter() {
  const filterList: FilterType[] = await getFilters();

  return (
    <>
      <div
        className="relative overflow-hidden w-screen bg-white px-4 py-4 rounded-md  rounded-t-none flex flex-col items-start h-full justify-between
   xl:bg-[#F7F7F7]  "
      >
        {filterList.map((item, index) => (
          <div key={index} className="flex flex-col w-full">
            <div className="lg:hidden absolute right-6 top-2">x</div>
            <label htmlFor={item.title} className="text-base">
              {item.title}
            </label>
            <HouseSelect item={item} />
          </div>
        ))}
        <div className="w-full  rounded-md bg-[#19A463]  py-3 flex flex-row items-center justify-center mt-5 cursor-pointer">
          <Image
            src={FilterLoop}
            alt="Filter loop icon"
            width={20}
            height={20}
          />
          <span className="ml-2 text-white text-xs ">Filter</span>
        </div>
      </div>
    </>
  );
}
