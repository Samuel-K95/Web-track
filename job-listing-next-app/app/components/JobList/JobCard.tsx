import React, { ReactNode } from "react";
import JobType from "@/app/JobType";
import Image from "next/image";

interface Prop {
  children: JobType;
}

const JobList = ({ children }: Prop) => {
  return (
    <div className="mt-5 JobList p-5  hover:shadow-md border hover:cursor-pointer rounded-3xl">
      <div className="MainContent flex flex-row">
        <div className="image flex-shrink-0 mr-5">
          <Image
            src={children.image}
            width={70}
            height={70}
            alt={`${children.title} image`}
          />
        </div>
        <div className="JobDescription ">
          <h2 className="mb-3 font-sans-mono font-semibold">
            {children.title}
          </h2>
          <span>
            <span className="text-gray-400 text-sm mr-1">
              {children.company}
            </span>
            <span className="text-gray-400 text-md mr-1">&#183;</span>
            <span className="text-gray-400 text-sm mr-3">
              {children.about.location}
            </span>
          </span>
          <p className="mb-5">{children.description}</p>
          <div className="flex">
            <div className="pr-2 border-r-2 mr-2">
              <button className=" bg-green-50 hover:bg-green-100 text-green-300 font-semibold py-2 px-4 rounded-full">
                In Person
              </button>
            </div>
            <div className="pl-2">
              <button className="text-sm p-2 mr-2 text-yellow-300 hover:bg-yellow-100 font-semibold py-2 px-4 border border-yellow-300 rounded-3xl">
                Education
              </button>
              <button className="ml-1 text-sm pl-6 pr-6 mr-2 text-blue-900 hover:bg-blue-100 font-semibold py-2 px-4 border border-blue-900 rounded-3xl">
                IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobList;
