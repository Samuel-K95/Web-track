"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import JobDescription from "@/app/components/JobDescription/JobDescription";

const DescriptionPage = () => {
  const searchParams = useSearchParams();
  const stringIndex = searchParams.get("index") || null;
  const index = stringIndex ? parseInt(stringIndex) : -1;
  return (
    <>
      <JobDescription index={index} />
    </>
  );
};

export default DescriptionPage;
