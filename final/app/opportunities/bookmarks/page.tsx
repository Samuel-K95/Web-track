"use client";
import Bookmark from "@/app/components/Bookmark/Bookmark";
import JobCard from "@/app/components/JobCard/JobCard";
import Loading from "@/app/components/Loading/loading";
import JobType from "@/app/JobType";
import {
  useGetAllJobsQuery,
  useGetBookmarksQuery,
} from "@/lib/service/Jobdata";
import { useSession } from "next-auth/react";
import React from "react";

const BookMarkPage = () => {
  const { data: session, status } = useSession();
  let jobLists: JobType[] = [];

  if (status === "authenticated") {
    const { data: jobsData } = useGetAllJobsQuery(undefined);
    const { data, isError, isLoading } = useGetBookmarksQuery(
      session?.user?.accessToken
    );
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
    for (const key in jobsData.data) {
      if (BookmarkedJobs.includes(jobsData.data[key].id)) {
        jobLists.push(jobsData.data[key]);
      }
    }
  }

  return (
    <div className="mt-10 w-4/5 flex justify-center align-middle items-center flex-col">
      {status === "unauthenticated" ? (
        <div>
          You are not authenticated to view this page. Please Login first!
        </div>
      ) : (
        <>
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
