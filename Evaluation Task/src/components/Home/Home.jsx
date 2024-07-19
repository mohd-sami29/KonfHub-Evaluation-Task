import React from "react";
import { Link } from "react-router-dom";
import { FaVideo, FaTicket } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import useApi from "../Api/useApi";

function Home() {
  const { data, error } = useApi();
  return (
    <>
      {error ? (
        <div className="flex justify-center items-center p-4">
          <p className="text-red-500 text-2xl font-semibold p-4 rounded border border-slate-500">{`${error}`}</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-center p-8">
          <div className="bg-white rounded-3xl p-2 shadow-xl shadow-gray-300">
            <img
              src={data.event_poster_url}
              alt="Poster Image"
              className="max-w-full h-auto rounded-3xl"
            />
          </div>
          <div className="md:ml-8 mt-8 md:mt-0 shadow-md">
            <div className="w-[18rem] mx-auto bg-white shadow-md rounded-lg px-4 pb-8 mb-4 border border-gray-300">
              <div className="flex justify-center mb-4"></div>
              <div className="">
                <p className="text-2xl font-bold mb-2">{data.name}</p>
              </div>
              <div className="flex justify-start space-x-4 mb-4">
                <div className="flex justify-center items-center py-1 px-3 rounded gap-2">
                  <div>
                    <FaVideo />
                  </div>
                  Online
                </div>
                <div className="flex justify-center items-center py-1 px-3 rounded gap-2">
                  <div>
                    <FaTicket />
                  </div>
                  Paid
                </div>
              </div>
              <div className="font-semibold mb-4">
                Event Live Link:
                <Link
                  to={data.event_live_link}
                  className="underline text-blue-500 ml-1"
                >
                  Open Streaming website
                </Link>
              </div>
              <div className=" mb-4">
                Date: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST
              </div>
              <div className=" text-lg mb-4">EVENT STARTS IN</div>
              {/* <div className="text-center text-2xl font-mono">
            3665D : 13H : 13M : 50S
          </div> */}
            </div>
            <div className="  items-center">
              <button
                type="button"
                className="bg-black text-white py-2 px-6 rounded-md mb-4 w-[18rem]"
              >
                Buy Now
              </button>
              <div className="flex justify-center items-center gap-2 border border-black text-black text-center py-2 px-6 rounded-md w-[18rem]">
                <Link to={data.event_website}>Official Website</Link>
                <div>
                  <FaExternalLinkAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
