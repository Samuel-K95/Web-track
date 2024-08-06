"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import formType from "../formType";
import { FieldErrors, useForm } from "react-hook-form";

const SignIn = () => {
  const form = useForm<formType>();
  const { register, handleSubmit, formState, reset } = form;

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: formType) => {};

  const onError = (errors: FieldErrors<formType>) => {
    console.log("form errors", errors);

    useEffect(() => {
      if (isSubmitSuccessful) {
        reset();
      }
    }, [isSubmitSuccessful, reset]);
  };

  return (
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
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
              type="text"
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

            <button className=" bg-blue-900 text-white w-full mb-5 flex items-center justify-center p-3 rounded-3xl font-bold mt-3">
              Log in
            </button>
          </form>
          <p className="text-gray-700 mb-5 text-md">
            Don't have an account?{" "}
            <span className="font-semibold">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
