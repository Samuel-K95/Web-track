"use client";
import React from "react";
import Link from "next/link";

const LandingPage = () => {
  console.log("here!!");
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="font-extrabold text-blue-900">
        Welcome to Akil's Job listing landing page
      </p>
      <Link href="/opportunities" className="flex justify-center">
        <button className="bg-blue-900 hover:bg-blue-800 active:bg-blue-700 text-white  mb-5 flex items-center justify-center flex-shrink-0 p-3 rounded-3xl font-bold mt-3 cursor-pointer ">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
