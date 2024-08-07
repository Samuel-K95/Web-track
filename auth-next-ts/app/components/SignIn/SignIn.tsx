"use client";
import React, { useEffect, useState } from "react";
import formType, { loginType } from "@/app/formType";
import { FieldErrors, useForm } from "react-hook-form";
import Link from "next/link";
import { useUserLoginMutation } from "@/lib/service/Userfile";
import { useRouter } from "next/navigation";
import Loading from "../Loading/Loading";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const form = useForm<formType>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const router = useRouter();
  const [load, setLoad] = useState<boolean>(false);
  const [UserLogin, { data, isLoading, isError }] = useUserLoginMutation();

  const onSubmit = async (data: formType) => {
    const SignInUser: loginType = {
      email: data.email,
      password: data.password,
    };

    let response = await UserLogin(SignInUser);

    if (response) {
      console.log("data");
      console.log(response.data);
      router.push(`/protected?name=${response.data?.data?.name}`);
    }
  };
  if (isError) {
    return <h1>Errorr</h1>;
  }

  if (isLoading) {
    return <Loading />;
  }

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
          {/* <button
            className="border border-gray-300 w-full mb-5 flex items-center justify-center p-3 rounded-md font-bold"
            onClick={() => signIn("google", { callbackUrl: "/Home" })}
          >
            <span className="mr-3">
              <Image src={"/google.svg"} width={20} height={20} alt="google" />
            </span>
            Sign in with Google
          </button> */}
          <p className="text-gray-700 mb-5 text-md">
            Don't have an account?{" "}
            <span className="font-semibold">
              <Link href={"/SignUp"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
