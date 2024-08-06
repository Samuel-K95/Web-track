"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const searchParams = useSearchParams();
  const SignInName = searchParams.get("name");

  return (
    <div className="flex justify-center items-center">
      <h1 className="font-extrabold text-blue-900">Welcome {SignInName}</h1>
    </div>
  );
};

export default Home;
