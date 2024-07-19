import React from "react";
import { Link } from "react-router-dom";
import useApi from "../Api/useApi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

function Speakers() {
  const { data, error } = useApi();
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        THIS IS SPEAKERS SECTION
      </h2>
      <p className="text-center mb-8">
        This is the description for speakers section.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border shadow-lg rounded-lg p-4">
          <img
            src="src/img/bruce_wayne.jpg"
            alt="Bruce Wayne"
            className="w-40 rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Bruce Wayne</h3>
          <p className="text-gray-500">Chairman</p>
          <p className="text-gray-500 mb-4">Wayne Enterprises</p>
          <div className="flex justify-start space-x-4">
            <Link
              to={data.organizer_facebook_url}
              className="text-gray-500 hover:text-black"
            >
              <FaFacebook />
            </Link>
            <Link
              to={data.organizer_twitter_url}
              className="text-gray-500 hover:text-black"
            >
              <FaXTwitter />
            </Link>
            <Link
              to={data.organizer_linkedin_url}
              className="text-gray-500 hover:text-black"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://konfhub.com/"
              className="text-gray-500 hover:text-black"
            >
              <TbWorld />
            </Link>
          </div>
        </div>
        <div className="bg-white border shadow-lg rounded-lg p-4">
          <img
            src="src/img/dark_night.jpg"
            alt="Dark Knight"
            className="w-40 rounded mb-4"
          />
          <h3 className="text-xl font-semibold">Dark Knight</h3>
          <p className="text-gray-500">Batman</p>
          <p className="text-gray-500 mb-4">Gotham</p>
          <div className="flex justify-start space-x-4">
            <Link
              to={data.organizer_facebook_url}
              className="text-gray-500 hover:text-black"
            >
              <FaFacebook />
            </Link>
            <Link
              to={data.organizer_twitter_url}
              className="text-gray-500 hover:text-black"
            >
              <FaXTwitter />
            </Link>
            <Link
              to={data.organizer_linkedin_url}
              className="text-gray-500 hover:text-black"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://konfhub.com/"
              className="text-gray-500 hover:text-black"
            >
              <TbWorld />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
