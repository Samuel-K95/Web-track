"use client";
import formType from "@/app/formType";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Loading from "../Loading/loading";

const LoginForm = () => {
  const form = useForm<formType>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (FormData: formType) => {
    setLoading(true);
    try {
      const resp = await signIn("credentials", {
        redirect: false,
        email: FormData.email,
        password: FormData.password,
      });

      if (resp?.ok) {
        alert("successfuly logged in!");
        router.push("/opportunities");
      } else {
        setLoading(false);
        alert("there was an error");
        router.push("/");
      }
    } catch (err) {
      setLoading(false);
      alert("there was an error");
      router.push("/");
    }
  };

  if (loading) {
    return (
      <div>
        <Loading />;
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full flex items-center justify-center flex-col m-10">
          <div className="flex flex-col w-1/4 justify-center">
            <h1 className="flex justify-center font-sans font-extrabold text-4xl mb-2">
              Welcome Back,
            </h1>
          </div>
          <div className="flex items-center w-full max-w-sm mx-auto mt-5 mb-5">
            <div className="flex-grow border-t border-gray-300 w-full"></div>
            <div className="block w-4/5"></div>
            <div className="flex-grow border-t border-gray-300 w-full"></div>
          </div>
          <div className="flex flex-col justify-start w-1/4">
            <form
              className="contact-form"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <label htmlFor="email" className="font-semibold">
                E-mail Address
              </label>
              <input
                type="text"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email can not be empty",
                  },
                  pattern: {
                    value: /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/,
                    message: "Incorrect email format",
                  },
                })}
                placeholder="Enter your email"
                className="border border-gray-300 w-full mt-2 rounded text-lg p-2 pl-3 items-center flex mb-5"
              />
              <p className="text-red-500 m-2">{errors.email?.message}</p>

              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password field can not be empty",
                  },
                })}
                placeholder="Enter your password"
                className="border border-gray-300 w-full mt-2 rounded text-lg p-2 pl-3 items-center flex mb-5"
              />
              <p className="text-red-500 m-2">{errors.password?.message}</p>

              <button
                type="submit"
                className=" bg-blue-900 text-white w-full mb-5 flex items-center justify-center p-3 rounded-3xl font-bold mt-3"
              >
                Log in
              </button>
            </form>

            <p className="text-gray-700 mb-5 text-md">
              Don't have an account?{" "}
              <span className="font-semibold">
                <Link href={"/SignUp"}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
