"use client";
import JobDescription from "@/app/components/JobDescription/JobDescription";
import Loading from "@/app/components/Loading/loading";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SearchParamsComponent = () => {
  const searchParams = useSearchParams();
  const stringIndex = searchParams.get("index");
  return <JobDescription id={stringIndex!} />;
};

const SearchPage = () => {
  // const searchParams = useSearchParams();
  // const stringIndex = searchParams.get("index");
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <SearchParamsComponent />
    </Suspense>
  );
};

export default SearchPage;
