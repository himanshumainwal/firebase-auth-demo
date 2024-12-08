import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RiShareForwardLine, RiChat1Line } from "react-icons/ri";

const Post = ({ user, text, image, likes, comments, shares }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="text-sm font-bold">{user.name}</h4>
          <p className="text-xs text-gray-500">{user.username}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-4 text-sm">
        {text} <span className="text-red-400 cursor-pointer">Read More</span>
      </p>
      <img src={image} alt="Post" className="rounded-lg w-full mb-4" />

      <div className="flex gap-2 text-gray-500 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <FaRegHeart className="text-lg" />
          <span className="pb-2">{likes}k</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <RiChat1Line className="text-lg" />
          <span className="pb-2">{comments}k</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <RiShareForwardLine className="text-lg" />
          <span className="pb-2">{shares}k</span>
        </div>

      </div>
    </div>
  );
};

export default Post;
