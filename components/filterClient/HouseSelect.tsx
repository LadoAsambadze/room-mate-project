"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArrowDown from "../../public/images/arrow-down.png";



export default function HouseSelect({ item }: any) {
  const [select, setSelect] = useState(false);

  const handleRangeChange = (param: any, e: any) => {
    let params = new URLSearchParams(window.location.search);
    params.set(param, e.target.value);
    window.history.replaceState({}, "", "?" + params.toString());
  };

  return (
    <>
      {item.search_type === "choice" && (
        <div
          onClick={() => setSelect(!select)}
          className="w-full bg-[#e3e3e3] cursor-pointer mb-[10px] mt-1 px-3 py-[8px] flex flex-row justify-between items-center overflow-hidden rounded-md lg:px-3 lg:py-3"
        >
          <button className="text-xs">Choice</button>
          <Image
            src={ArrowDown}
            alt="Arrow down icon"
            style={{
              transform: select ? "none" : "rotate(180deg)",
            }}
          />
        </div>
      )}

      <div
        style={{ display: select ? "block" : "none" }}
        className="absolute mr-2 bg-[#d6d1d1] rounded-sm px-3 py-3 top-20 lg:top-[93px] w-[93%] h-[290px] overflow-y-scroll"
      >
        {item.data &&
          item.data.map((obj: any, index: any) => (
            <label key={index} className="flex flex-row">
              <input type="checkbox" className="mr-1" />
              {obj.title}
            </label>
          ))}
      </div>
      {item.search_type === "range" && (
        <div className="flex flex-row justify-between items-center w-full overflow-hidden lg:justify-between">
          <input
            type="number"
            placeholder="from"
            className="w-[50%] mr-2 lg:mr-3 mt-1 bg-[#E3E3E3] rounded-md outline-none no-spinners  mb-[10px] px-2 py-1 text-[14px] 
         lg:px-3 lg:py-2 "
            onChange={(e) =>
              handleRangeChange(
                item.title === "საძინებელი"
                  ? "bedroom_from"
                  : item.title === "ოთახი"
                  ? "room_from"
                  : item.title === "ფასი"
                  ? "price_from"
                  : item.title === "საერთო ფართი"
                  ? "area_from"
                  : item.title,
                e
              )
            }
          />

          <input
            type="number"
            placeholder="to"
            className="w-[50%] bg-[#E3E3E3] mt-1 rounded-md  outline-none no-spinners  mb-[10px] px-2 py-1 text-[14px] lg:px-3 lg:py-2 "
            onChange={(e) =>
              handleRangeChange(
                item.title === "საძინებელი"
                  ? "bedroom_to"
                  : item.title === "ოთახი"
                  ? "room_to"
                  : item.title === "ფასი"
                  ? "price_to"
                  : item.title === "საერთო ფართი"
                  ? "area_to"
                  : item.title,
                e
              )
            }
          />
        </div>
      )}
    </>
  );
}
