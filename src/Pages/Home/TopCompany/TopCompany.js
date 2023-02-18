import React from "react";

const TopCompany = ({ topcompany }) => {
  const { company_name, company_logo } = topcompany;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto p-3">
      <figure>
        <img className="w-32" src={company_logo} alt="Shoes" />
      </figure>
      <div className="card-body items-center text-center mt-[-10px]">
        <h2 className="card-title mb-1">{company_name}</h2>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TopCompany;
