"use client";
import { useGetAllJobsQuery } from "@/lib/service/data";
import React from "react";
import JobCard from "./components/JobCard/JobCard";
import JobType from "./JobType";
import Opportunities from "./opportunities/page";

const page = () => {
  return (
    <>
      <Opportunities />
    </>
  );
};

export default page;
