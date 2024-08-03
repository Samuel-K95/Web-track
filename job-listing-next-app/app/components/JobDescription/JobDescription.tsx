import jobLists from "@/app/opportunities/data";
import Image from "next/image";
import React from "react";

interface Prop {
  index: number;
}

const JobDescription = ({ index }: Prop) => {
  const demo = jobLists[index];

  return (
    <div className="flex justify-center">
      <div className="flex p-5 w-4/5">
        <div className="paragraph w-3/4 mr-10 p-5">
          <div className="Description mt-5">
            <h2 className="mt-0 text-3xl font-extrabold mb-3">Description</h2>
            <p>{demo.description}</p>
          </div>
          <div className="Responsibilities mt-10">
            <h2 className="mt-0 text-3xl font-extrabold mb-3">
              Responsibilities
            </h2>
            {demo.responsibilities.map((resp, index) => (
              <div className="flex" key={index}>
                <span className="mr-2">
                  <Image src={"/icon.png"} width={20} height={20} alt="icon" />
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
              <span className="mr-2">
                &#183; Age: {demo.ideal_candidate.age}
              </span>
              <span className="mr-2">
                Gender: {demo.ideal_candidate.gender}
              </span>
              <span className="mr-2">{demo.title.toLowerCase()}</span>
            </div>

            <div className="">
              {demo.ideal_candidate.traits.map((trait, index) => (
                <div key={index}>
                  <span className="font-bold mr-2">
                    &#183; {trait.split(":")[0] + ":"}
                  </span>
                  <span>{trait.split(":")[1]}</span>
                </div>
              ))}
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
              <p>{demo.when_where}</p>
            </div>
          </div>
        </div>

        <div className="rightContent flex flex-col m-5 flex-auto pb-10">
          <h2 className="mt-0 text-3xl font-extrabold mb-3">About</h2>

          <div className="p-2 border-b-2 flex flex-col justify-start pb-5">
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
                <p className="font-semibold">{demo.about.posted_on}</p>
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
                <p className="font-semibold">{demo.about.deadline}</p>
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
                <p className="font-semibold">{demo.about.location}</p>
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
                <p className="font-semibold">{demo.about.start_date}</p>
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
                <p className="font-semibold">{demo.about.end_date}</p>
              </div>
            </div>
          </div>

          <div className="Categories mt-3 border-b-2 pb-5">
            <h2 className="text-3xl font-extrabold mb-3">Categories</h2>
            <div>
              <button className="text-sm p-2 mr-2 text-yellow-500 bg-yellow-100 font-semibold py-2 px-4  rounded-3xl">
                {demo.about.categories[0]}
              </button>

              <button className="text-sm p-2 mr-2 text-green-500 bg-green-100 font-semibold py-2 px-4  rounded-3xl">
                {demo.about.categories[1]}
              </button>
            </div>
          </div>
          <div className="RequiredSkills">
            <h2 className="text-3xl font-extrabold mb-4 mt-5">
              Required Skills
            </h2>
            <div>
              {demo.about.required_skills.map((skill, index) => (
                <button
                  className="m-2 text-sm p-2 mr-2 text-blue-800 bg-blue-50 font-semibold py-2 px-4"
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
