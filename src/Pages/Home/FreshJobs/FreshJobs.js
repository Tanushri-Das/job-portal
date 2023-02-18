import React from "react";
import { FaLayerGroup, FaLocationArrow, IconName } from "react-icons/fa";
import { Link } from "react-router-dom";

const FreshJobs = ({ freshjob }) => {
  const { position, company_name, job_location ,id} = freshjob;
  return (
    <div className="card w-full lg:w-3/4 bg-base-100 shadow-xl mx-auto p-6">
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
          {/* <button className="btn btn-primary">Apply Now</button> */}
          <Link to={`/applyjob/${id}`}>
            <button className="btn btn-outline btn-info">Apply Now</button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default FreshJobs;
