import React from "react";
import { Link } from "react-router-dom";
import useApi from "../Api/useApi";

function Sponsers() {
  const { data, error } = useApi();

  if (error) {
    return (
      <div className="flex justify-center items-center p-4">
        <p className="text-red-500 text-2xl font-semibold p-4 rounded border border-slate-500">
          Error: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">THIS IS EVENT SPONSORS</h1>
        <p className="text-gray-600">
          This is description of sponsors section.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full flex justify-start">
          <Link to="https://konfhub.com/">
            <img
              src="src/img/event_sponsors image.webp"
              alt="Top Image"
              className="w-56 border rounded-md object-cover h-auto"
            />
          </Link>
        </div>
        <div className="w-full">
          <div className="flex items-center">
            <h2 className="text-2xl w-56 ">SPONSOR CATEGORY</h2>
            <div className="border-t border-gray-300 my-2 w-[48rem]"></div>
          </div>

          <div className="w-full flex justify-start">
            <Link to={data.organiser_website}>
              <img
                src="src/img/sponsors_category image.jpg"
                alt="Bottom Image"
                className="w-72 rounded-md h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsers;
