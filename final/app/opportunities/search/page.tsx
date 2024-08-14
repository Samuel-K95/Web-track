"use client";
import JobDescription from "@/app/components/JobDescription/JobDescription";
import Loading from "@/app/components/Loading/loading";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const stringIndex = searchParams.get("index");
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <div>
        <JobDescription id={stringIndex!} />{" "}
        {/* This SearchPage accepts the id from the url and pass it to the JobDescription component as a prop*/}
      </div>
    </Suspense>
  );
};

export default SearchPage;
