"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import formType from "../formType";
import { FieldErrors, useForm } from "react-hook-form";
import { useAddNewUserMutation } from "@/lib/service/Userfile";

const SignUp = () => {
  const form = useForm<formType>();
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async (data: formType) => {
    try {
      const newUser: formType = {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };

      await addNewUser(newUser);
    } catch (err) {
      console.log("error", err);
    }
  };
  const [addNewUser, { data, error, isLoading }] = useAddNewUserMutation();
  if (error) {
    return <h1>Errorr</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  console.log(data);

  return (
    <div className="w-full flex items-center justify-center flex-col m-10 text-blue-900">
      <div className="flex flex-col w-1/4 justify-center">
        <h1 className="flex justify-center font-sans font-extrabold text-3xl mb-5">
          Sign Up Today!
        </h1>
        <button className="border border-gray-300 w-full mb-5 flex items-center justify-center p-3 rounded-md font-bold">
          <span className="mr-3">
            <Image src={"/google.svg"} width={20} height={20} alt="google" />
          </span>
          Sign up with Google
        </button>
      </div>
      <div className="flex items-center w-full max-w-sm mx-auto">
        <div className="flex-grow border-t border-gray-300 w-full"></div>
        <span className="flex-shrink-0 mx-4 text-gray-500">
          Or Sign Up with Email
        </span>
        <div className="flex-grow border-t border-gray-300 w-full"></div>
      </div>

      <div className="flex flex-col justify-start w-1/4">
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name field Can't be empty",
              },
            })}
            placeholder="Enter your full name"
            className="border border-gray-300 w-full mt-2 rounded text-lg p-2 pl-3 items-center flex mb-5"
          />
          <p className="text-red-500 m-2">{errors.name?.message}</p>

          <label htmlFor="email" className="font-semibold">
            E-mail
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

          <label htmlFor="password" className="font-semibold">
            Confirm Password
          </label>

          <input
            type="text"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Password field can not be empty",
              },
            })}
            placeholder="Confirm password"
            className="border border-gray-300 w-full mt-2 rounded text-lg p-2 pl-3 items-center flex mb-5"
          />
          <p className="text-red-500 m-2">{errors.password?.message}</p>

          <button className=" bg-blue-900 text-white w-full mb-5 flex items-center justify-center p-3 rounded-3xl font-bold mt-3">
            Continue
          </button>
        </form>
        <p className="text-gray-700 mb-5">
          Already have an account? <span className="font-semibold">Log in</span>
        </p>

        <p className="text-gray-500">
          By clicking 'Continue', you acknowledge that you have read and
          accepted out{" "}
          <span className="text-blue-900 font-semibold">Terms of Service</span>{" "}
          and{" "}
          <span className="text-blue-900 font-semibold">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
