import React from "react";
import { FaLayerGroup, FaLocationArrow } from "react-icons/fa";

const ExperienceJob = ({ experiencejob }) => {
  const { position, company_name, job_location, company_logo } = experiencejob;
  return (
    <div>
      <div className="card lg:w-3/4 bg-base-100 shadow-xl mx-auto p-4 border-2 hidden lg:flex">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center">
            <div className="mx-auto">
              <img className="w-40" src={company_logo} alt="Shoes" />
            </div>
            <div className="ml-60">
              <h2 className="text-3xl font-medium">{position}</h2>
              <div className="flex items-center my-3 text-lg">
                <FaLayerGroup className="mr-2" />
                <p>{company_name}</p>
              </div>
              <div className="flex items-center my-2 text-lg">
                <FaLocationArrow className="mr-2" />
                <p>{job_location}</p>
              </div>
            </div>
          </div>

          <div className="">
            <button
              type="button"
              className="px-6 py-4 rounded-md font-medium text-lg text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full flex lg:hidden bg-base-100 shadow-xl mx-auto p-6">
      <figure>
        <img className="w-32" src={company_logo} alt="Shoes" />
      </figure>
      <div className="flex items-center justify-between p-5">
        <div className="text-left">
          <h2 className="text-2xl font-medium">{position}</h2>
          <div className="flex items-center my-2 text-lg">
            <FaLayerGroup className="mr-2" />
            <p>{company_name}</p>
          </div>
          <div className="flex items-center my-2 text-lg">
            <FaLocationArrow className="mr-2" />
            <p>{job_location}</p>
          </div>
        </div>

        <div className="">
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExperienceJob;
