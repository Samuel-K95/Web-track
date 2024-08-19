"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useGetAllJobsQuery } from "@/lib/service/Jobdata";

const Nav = () => {
  const { data: session, status } = useSession();
  const { refetch } = useGetAllJobsQuery(session?.user.accessToken);

  return (
    <header className="text-black-100 pl-12 pr-20">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div className="font-bold  text-xl ml-10 text-blue-900">
          Welcome {session ? session.user.name : " "}
        </div>
        <div className="flex gap-10 items-center">
          <Link
            href={"/opportunities"}
            className="text-blue-900 font-bold"
            onClick={() => refetch()}
          >
            Home
          </Link>
          <Link
            href={"/opportunities/bookmarks"}
            className="text-blue-900 font-bold"
          >
            Bookmarks
          </Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/opportunities">
              <button className="bg-blue-500 flex p-2 rounded text-white">
                Log out
              </button>
            </Link>
          ) : (
            <Link href="/LogIn" data-id="login-btn">
              <button className="bg-blue-500 flex p-2 rounded text-white">
                Log in
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
