"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Home = () => {
  const [SignName, setSignName] = useState("");

  useEffect(() => {
    const name = sessionStorage.getItem("email");
    setSignName(name || "");
  });

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="font-extrabold text-blue-900 block mb-3">
        Welcome {SignName}
      </h1>
      <Link href="/SignIn" onClick={() => sessionStorage.setItem("email", "")}>
        Log out
      </Link>
    </div>
  );
};

export default Home;
