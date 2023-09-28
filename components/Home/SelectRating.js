import Data from "@/shared/Data";
import React, { useState } from "react";

const SelectRating = () => {
  const [selectedRating, setSelectedRating] = useState([]);

  const onSelectRating = (isChecked, value) => {
    if (isChecked) {
      setSelectedRating([...selectedRating, value]);
    } else {
      setSelectedRating(selectedRating.filter((n) => n != value));
    }

    console.log(">> Rating selected: ", selectedRating);
  };
  return (
    <div className="px-2 mt-5">
      <h2 className="font-bold">Select rating</h2>
      <div>
        {Data.ratingList.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <label htmlFor="rating">{item.icon}</label>
            <input
              onChange={(e) => onSelectRating(e.target.checked, item.name)}
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectRating;
