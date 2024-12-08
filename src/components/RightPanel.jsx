import React from "react";

const RightPanel = () => {
  const artists = [
    {
      name: "Thomas Edward",
      image: "./rightSide_dp_1.png",
      backgroundImage: "./rightSide_1.png",
    },
    {
      name: "Chris Doe",
      image: "./rightSide_dp_2.png",
      backgroundImage: "./rightSide_2.png",
    },
    {
      name: "Emilie Jones",
      image: "./rightSide_dp_3.png",
      backgroundImage: "./rightSide_3.png",
    },
    {
      name: "Jessica Williams",
      image: "./rightSide_dp_4.png",
      backgroundImage: "./rightSide_4.png",
    },
  ];

  return (
    <div className=" h-screen w-1/4 m-4 px-6 space-y-6">
      <button className="bg-[#88C2BB] text-md hover:bg-[#64918c] text-white px-10 pt-4 pb-6 rounded-lg ">
        Become a Seller
      </button>

      <div>
        <h4 className="font-bold text-gray-700 mb-4">Artists <span className="text-sm text-gray-500 font-thin">Photographers</span></h4>
        {artists.map((artist) => (
          <div
            key={artist.name}
            className="flex items-end gap-4 mb-4 p-4 rounded-lg text-white shadow-md"
            style={{
              background: `url(${artist.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "150px",
            }}
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-10 h-10 rounded-md border-white"
            />
            <div className="flex text-lg flex-col gap-1">
              <p className="font-bold">{artist.name}</p>
              <p className="text-xs">@ thewildwithyou</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs px-2 justify-between flex text-gray-500 mt-auto">
        <p>Privacy</p>
        <p>Terms of Service</p>
        <p>Creative Notice</p>
      </div>
    </div>
  );
};

export default RightPanel;
