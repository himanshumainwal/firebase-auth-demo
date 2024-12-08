import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBell, FaShoppingBag, FaComments, FaWallet, FaStar, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-1/4 h-screen p-4">
        <div className="text-2xl rounded-lg bg-white pt-3 pb-5 px-6  drop-shadow font-bold text-left mb-6">
          <h1 >LOGO</h1>
        </div>
        <div className="flex  rounded-lg p-9 h-4/5 bg-white drop-shadow flex-col justify-between ">


          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaHome className="text-lg" />
              <span>Home</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaBell className="text-lg" />
              <span>Notifications</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaShoppingBag className="text-lg" />
              <span>Shop</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaComments className="text-lg" />
              <span>Conversation</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaWallet className="text-lg" />
              <span>Wallet</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaStar className="text-lg" />
              <span>Subscription</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaUser className="text-lg" />
              <span>My Profile</span>
            </li>
            <li className="flex items-center gap-4 text-gray-400 hover:text-blue-500 cursor-pointer">
              <FaCog className="text-lg" />
              <span>Settings</span>
            </li>
          </ul>
          <div className="flex flex-col items-start">
            <button onClick={handleLogout} className="flex items-end h-auto gap-4 text-[#88C2BB] hover:text-[#64918c] cursor-pointer">
              <FaSignOutAlt className="text-lg" />
              <span className="">Log out</span>
            </button>
          </div>
        </div>

        <div className="text-xs flex justify-between px-2 text-gray-500 mt-2">
          <p className="mb-2">2022©logo name </p>
          <p>Developed by ivan Infotech</p>
        </div>

      </div>
    </>
  );
};

export default Sidebar;
