import JobType from "@/app/JobType";
import { useGetJobByIdQuery } from "@/lib/service/Jobdata";
import React from "react";
import Image from "next/image";
import Loading from "../Loading/loading";

interface prop {
  id: string;
}

/**
 * This is the JobDescription component that accepts an id as a prop, fetch the Job by using the id and
 * populates the page based on the recieved data
 */
const JobDescription = ({ id }: prop) => {
  const { data, isError, isLoading } =
    useGetJobByIdQuery(id); /* fetching data */
  if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <Loading />;
  }
  const demo: JobType = data?.data;
  const responsibility: string[] = demo.responsibilities.split("\n");
  const url: string = demo.logoUrl
    ? demo.logoUrl
    : "https://res.cloudinary.com/dtt1wnvfb/image/upload/v1701954159/photo_2023-12-07%2016.02.23.jpeg.jpg";
  return (
    <div className="flex justify-center">
      <div className="flex p-5 w-4/5 justify-between">
        <div className="paragraph min-w-96 w-3/4 mr-10 p-5">
          <div className="Description mt-5">
            <h2 className="mt-0 text-3xl font-extrabold mb-3">Description</h2>
            <p>{demo.description}</p>
          </div>
          <div className="Responsibilities mt-10">
            <h2 className="mt-0 text-3xl font-extrabold mb-3">
              Responsibilities
            </h2>
            {responsibility.map((resp, index) => (
              <div className="flex flex-row" key={index}>
                <span className="mr-2 flex-shrink-0">
                  <Image
                    src={"/icon.png"}
                    width={20}
                    height={20}
                    alt="icon"
                    className="flex-shrink-0"
                  />
                </span>
                <p>{resp}</p>
              </div>
            ))}
          </div>
          <div className="IdealCandidate mt-10">
            <h2 className="mt-0 text-3xl font-extrabold mb-3">
              Ideal Candidate we want
            </h2>
            <div className="flex font-semibold">
              <span className="mr-2 block">&#183; {demo.idealCandidate}</span>
            </div>
          </div>
          <div className="AboutRole mt-10">
            <h2 className="mt-0 text-3xl font-extrabold mb-3">When & Where</h2>
            <div className="flex items-center">
              <span>
                <Image
                  src={"/location.png"}
                  width={40}
                  height={40}
                  alt="When and where"
                  className="border-gray-200 border mr-5 rounded-full p-2"
                />
              </span>
              <p>{demo.whenAndWhere}</p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col m-5 pb-10 relative right-0">
          <h2 className="mt-0 text-3xl font-extrabold mb-3">About</h2>

          <div className=" border-b-2 flex flex-col justify-start pb-5">
            <div className="Postedon flex items-center mb-5">
              <span>
                <Image
                  src={"/plus-circle.png"}
                  width={40}
                  height={40}
                  alt="plussign"
                  className="border-gray-200 border mr-5 rounded-full p-2"
                />
              </span>
              <div>
                <p className="text-gray-00">Posted On</p>
                <p className="font-semibold">{demo.createdAt}</p>
              </div>
            </div>

            <div className="flex items-center">
              <span>
                <Image
                  src={"/Vector.png"}
                  width={40}
                  height={40}
                  alt="plussign"
                  className="border-gray-200 border mr-5 rounded-full p-2"
                />
              </span>
              <div>
                <p className="text-gray-500">Deadline</p>
                <p className="font-semibold">{demo.deadline}</p>
              </div>
            </div>

            <div className="flex items-center mt-5">
              <span>
                <Image
                  src={"/location.png"}
                  width={40}
                  height={40}
                  alt="plussign"
                  className="border-gray-200 border mr-5 rounded-full p-2"
                />
              </span>
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-semibold">{demo.location}</p>
              </div>
            </div>

            <div className="flex items-center mt-5">
              <span>
                <Image
                  src={"/calendar.png"}
                  width={40}
                  height={40}
                  alt="plussign"
                  className="border-gray-200 border mr-5 rounded-full p-2"
                />
              </span>
              <div>
                <p className="text-gray-500">Start Date</p>
                <p className="font-semibold">{demo.startDate}</p>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <span>
                <Image
                  src={"/end_date.png"}
                  width={40}
                  height={40}
                  alt="plussign"
                  className="border-gray-200 border mr-5 rounded-full p-2"
                />
              </span>
              <div>
                <p className="text-gray-500 ">End Date</p>
                <p className="font-semibold">{demo.endDate}</p>
              </div>
            </div>
          </div>

          <div className="Categories mt-3 border-b-2 pb-5">
            <h2 className="text-3xl font-extrabold mb-3">Categories</h2>
            <div>
              <button className="text-sm p-2 m-2 text-yellow-500 bg-yellow-100 font-semibold py-2 px-4  rounded-3xl">
                {demo.categories[0]}
              </button>

              <button className="text-sm p-2 m-2 text-green-500 bg-green-100 font-semibold py-2 px-4  rounded-3xl">
                {demo.categories[1]}
              </button>
            </div>
          </div>
          <div className="RequiredSkills">
            <h2 className="text-3xl font-extrabold mb-4 mt-5">
              Required Skills
            </h2>
            <div>
              {demo.requiredSkills.map((skill, index) => (
                <button
                  className="m-2 text-sm p-2 mr-2 text-blue-800 bg-blue-50 font-semibold py-2 px-4 flex"
                  key={index}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
