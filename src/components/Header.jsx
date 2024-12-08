import React from "react";
import { FiSearch, FiFilter } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="flex items-center rounded-lg justify-between mt-4 px-6 py-2 bg-white shadow-md">
        <div className="flex items-center w-2/3 border-none border-gray-300 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-500 mr-4" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pb-2 outline-none"
          />
        </div>

        <div className="flex items-center px-4 py-2 cursor-pointer rounded-lg text-gray-600">
          <FiFilter className="mr-2" />
          <p className="pb-2">Filters</p>
        </div>
      </div>
    </>
  );
};

export default Header;
