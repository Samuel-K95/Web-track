"use client";
import JobCard from "@/app/components/JobCard/JobCard";
import Loading from "@/app/components/Loading/loading";
import JobType from "@/app/JobType";
import { useGetAllJobsQuery } from "@/lib/service/Jobdata";

/**
 * This is the page that lists the Jobs.
 *
 */
const Opportunities = () => {
  const { data, isError, isLoading } =
    useGetAllJobsQuery(undefined); /* fetching all Jobs */
  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <Loading />;
  }
  const jobLists: JobType[] = data?.data;
  return (
    <div className="mt-10 w-4/5 flex justify-center align-middle items-center flex-col">
      <div className="w-4/5 flex justify-between ml-0">
        <div className="mt-0 Opportunities">
          <h1 className="mt-0 text-3xl font-extrabold">Opportunities</h1>
          <span className="text-gray-500">
            Showing {jobLists.length} results
          </span>
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
            <JobCard job={job} key={job.id} />{" "}
            {/*This is the Job Card that accepts the Job object as a prop*/}
          </>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
