"use client";
import JobDescription from "@/app/components/JobDescription/JobDescription";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const stringIndex = searchParams.get("index");
  return (
    <div>
      <JobDescription id={stringIndex!} />{" "}
      {/* This page accepts the id from the url and pass it to the JobDescription component as a prop*/}
    </div>
  );
};

export default page;
