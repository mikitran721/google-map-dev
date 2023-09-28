import React, { useState } from "react";
import Data from "@/shared/Data";
import Image from "next/image";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div>
      <h2 className="font-bold">Select Food Type</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item, index) => (
          <div
            onClick={() => setSelectedCategory(index)}
            className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer  border-purple-400 ${
              selectedCategory == index ? "grayscale-0 border-[1px]" : null
            }`}
            key={index}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
