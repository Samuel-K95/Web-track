import React, { Suspense } from "react";
import Image from "next/image";
import JobType from "@/app/JobType";
import { useSession } from "next-auth/react";
import {
  useGetBookmarksQuery,
  useUnBookmarkMutation,
} from "@/lib/service/Jobdata";
import Loading from "../Loading/loading";

interface jobProp {
  job: JobType;
}

const Bookmark = ({ job }: jobProp) => {
  const { data: session, status } = useSession();
  const { refetch, isLoading, isError } = useGetBookmarksQuery(
    session?.user.accessToken
  );

  const [unBookmark] = useUnBookmarkMutation(undefined);
  console.log("in bookmark:", job.isBookmarked);

  const handleUnBookmark = async () => {
    try {
      const response = await unBookmark({
        id: job.id,
        accessToken: session?.user?.accessToken || "",
      });

      if (response.data?.success) {
        alert("Successfully removed Bookmark!");
        refetch();
      }
    } catch (err) {
      alert("There was an error. Try again!");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  const url: string = job.logoUrl
    ? job.logoUrl
    : "https://res.cloudinary.com/dtt1wnvfb/image/upload/v1701954159/photo_2023-12-07%2016.02.23.jpeg.jpg";
  return (
    <div className="mt-5 w-4/5 JobList p-5 hover:shadow-md border hover:cursor-pointer rounded-3xl">
      <div className="MainContent flex flex-row">
        <Suspense fallback={<Loading />}>
          <a href={`/opportunities/search?index=${job?.id}`}>
            <div className="image flex-shrink-0 mr-5">
              <Image
                src={url}
                width={70}
                height={70}
                alt={`${job?.title} image`}
              />
            </div>
          </a>
        </Suspense>
        <div className="JobDescription w-full">
          <div className="flex justify-between">
            <Suspense fallback={<Loading />}>
              <a href={`/opportunities/search?index=${job?.id}`}>
                <div>
                  <h2 className="mb-3 font-sans-mono font-semibold">
                    {job?.title}
                  </h2>
                  <span>
                    <span className="text-gray-400 text-sm mr-1">
                      {job?.orgName}
                    </span>
                    <span className="text-gray-400 text-md mr-1">&#183;</span>
                    <span className="text-gray-400 text-sm mr-3">
                      {job?.location}
                    </span>
                  </span>
                </div>
              </a>
            </Suspense>
            <div>
              <button
                className="p-2 mr-2 text-yellow-400 hover:bg-yellow-100 font-semibold py-2 px-4 border border-yellow-300 rounded-3xl"
                onClick={handleUnBookmark}
              >
                Bookmarked
              </button>
            </div>
          </div>
          <Suspense fallback={<Loading />}>
            <a href={`/opportunities/search?index=${job?.id}`}>
              <p className="mb-5">{job.description}</p>
              <div className="flex">
                <div className="pr-2 border-r-2 mr-2">
                  <button className=" bg-green-50 hover:bg-green-100 text-green-300 font-semibold py-2 px-4 rounded-full">
                    {job?.opType}
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
            </a>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
