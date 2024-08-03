import React from "react";
import JobList from "../components/JobList/JobCard";
import jobLists from "@/app/opportunities/data";

const OpportunitiesPage = () => {
  return (
    <div className="mt-10 w-4/5 flex justify-center align-middle items-center flex-col">
      <div className="w-4/5 flex justify-between">
        <div className="mt-0 Opportunities">
          <h1 className="mt-0 text-3xl font-extrabold">Opportunities</h1>
          <span className="text-gray-500">Showing 73 results</span>
        </div>
        <div className="sortBy flex items-center">
          <span className="mr-2 text-gray-500">Sort By:</span>
          <span className="items-center">
            <select>
              <option>Most Relevant</option>
            </select>
          </span>
        </div>
      </div>

      <div className="Container p-2 flex justify-center align-middle items-center flex-col">
        {jobLists.map((job, index) => (
          <JobList children={job} idx={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default OpportunitiesPage;
