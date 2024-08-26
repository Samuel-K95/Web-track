"use client";
import { useSession } from "next-auth/react";
import React from "react";

const Home = () => {
  const { data: session } = useSession();
  console.log("session?");
  console.log(session);
  return <div>{session?.user.name}</div>;
};

export default Home;
