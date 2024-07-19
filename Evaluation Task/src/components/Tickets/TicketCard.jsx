import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { LuIndianRupee } from "react-icons/lu";

const TicketCard = ({
  title,
  description,
  url,
  location,
  venueDetails,
  availableTill,
  price,
  priceDetails,
  buttonText,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 m-4 max-w-2xl shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <p className="mb-4">
        <Link to={url} className="text-blue-500 flex items-center">
          <IoLocationSharp className="mr-1" />
          {location}
        </Link>
      </p>
      <p className="mb-4">{venueDetails}</p>
      <p className="mb-4 bg-gray-100 p-1 rounded w-fit">
        Available Till: {availableTill}
      </p>
      <div className="flex justify-between">
        {price || priceDetails ? (
          <h3 className="text-2xl flex justify-center items-center font-medium mb-4">
            {priceDetails ? (
              <>
                <div className="text-sm mt-2 mr-1">Min</div>
                <LuIndianRupee className="mt-1" />
                {priceDetails.min} -
                <div className="text-sm mt-2 ml-1 mr-1">Max</div>
                <LuIndianRupee className="mt-1" />
                {priceDetails.max}
              </>
            ) : (
              <>
                <LuIndianRupee className="mt-1" />
                {price}
              </>
            )}
          </h3>
        ) : (
          <h3 className="text-3xl font-medium mb-4">FREE</h3>
        )}
        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TicketCard;
