"use client";
import JobDescription from "@/app/components/JobDescription/JobDescription";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const searchParams = useSearchParams();
  const stringIndex = searchParams.get("index");
  return (
    <div>
      <JobDescription id={stringIndex!} />
    </div>
  );
};

export default page;
