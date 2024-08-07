"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Home = () => {
  const searchParams = useSearchParams();
  const SignName = searchParams.get("name");
  const session = useSession();

  console.log("Information");
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="font-extrabold text-blue-900 block mb-3">
        Welcome {SignName}
      </h1>
      <Link href="/SignIn">Log out</Link>
    </div>
  );
};

export default Home;
