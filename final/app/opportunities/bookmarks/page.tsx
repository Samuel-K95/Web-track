"use client";
import Bookmark from "@/app/components/Bookmark/Bookmark";
import Loading from "@/app/components/Loading/loading";
import JobType from "@/app/JobType";
import {
  useGetAllJobsQuery,
  useGetBookmarksQuery,
} from "@/lib/service/Jobdata";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const BookMarkPage = () => {
  const { data: session, status } = useSession();
  const { data: jobsData } = useGetAllJobsQuery(undefined);
  const { data, isError, isLoading } = useGetBookmarksQuery(
    session?.user?.accessToken
  );
  let jobLists: JobType[] = [];

  if (status === "authenticated") {
    let BookmarkedJobs: string[] = [];
    for (const key in data?.data) {
      BookmarkedJobs.push(data?.data[key].eventID);
    }

    if (isError) {
      return <div>Error</div>;
    }
    if (isLoading) {
      return <Loading />;
    }
    if (jobsData && jobsData.data)
      for (const key in jobsData.data) {
        if (BookmarkedJobs.includes(jobsData.data[key].id)) {
          jobLists.push(jobsData.data[key]);
        }
      }
  }

  return (
    <div className="mt-10 w-4/5 flex justify-center align-middle items-center flex-col">
      {status === "unauthenticated" ? (
        <div>You are not authorized to view this page. Please Login first!</div>
      ) : (
        <>
          <div className="w-4/5 flex justify-between ml-0">
            <div className="mt-0 Opportunities">
              <h1 className="mt-0 text-3xl font-extrabold">Bookmarks</h1>
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

          {jobLists.map((job) => (
            <div className="w-full p-2 flex justify-center align-middle items-center flex-col">
              <Bookmark job={job} key={job.id} />{" "}
              {/*This is the Job Card that accepts the Job object as a prop*/}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BookMarkPage;
