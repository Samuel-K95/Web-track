import { useGetAllJobsQuery } from "@/lib/service/data";
import React from "react";
import JobType from "../JobType";
import JobCard from "../components/JobCard/JobCard";

const Opportunities = () => {
  const { data, isError, isLoading } = useGetAllJobsQuery(undefined);
  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }
  const jobLists: JobType[] = data?.data;
  console.log("data: ");
  console.log(jobLists);
  console.log(Array.isArray(data));
  return (
    <div className="mt-10 w-4/5 flex justify-center align-middle items-center flex-col">
      <div className="w-4/5 flex justify-between ml-0">
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
        {jobLists.map((job) => (
          <>
            <JobCard job={job} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
