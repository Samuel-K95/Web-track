"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useVerifyUserMutation } from "@/lib/service/UserData";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyType } from "../../formType";
import Loading from "../Loading/loading";

interface form_types {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const Verify = () => {
  const form = useForm<form_types>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting, isDirty, isValid } = formState;
  const [verifyUser, { data, isLoading, isError }] = useVerifyUserMutation();
  const searchParams = useSearchParams();
  const UnverifiedEmail = searchParams.get("email");
  const router = useRouter();

  if (isError) {
    return <h1>Errorr</h1>;
  }

  if (isLoading) {
    return <Loading />;
  }
  const onSubmit = async (data: form_types) => {
    try {
      let otp = data.first + data.second + data.third + data.fourth;

      const UnverifiedUser: verifyType = {
        email: UnverifiedEmail!,
        otp: otp,
      };

      const resp = await verifyUser(UnverifiedUser);

      if (resp.data?.success) {
        reset();
        alert("verification successful");
        router.push("/LogIn");
      } else {
        throw new Error("verification error!");
      }
    } catch (error) {
      throw new Error("There was an Error!");
    }
  };

  return (
    <div className="flex justify-center items-center mt-40">
      <div className="flex flex-col justify-center items-center w-1/3">
        <h1 className="font-extrabold text-3xl mb-10">Verify Email</h1>
        <p className="text-gray-400 text-lg text-justify">
          We've sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>

        <div className="mt-10 flex flex-cols justify-center items-center">
          <form
            className="flex flex-col justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-32 ml-7">
              <input
                type="string"
                id="first"
                {...register("first", {
                  required: {
                    value: true,
                    message: "otp required",
                  },
                })}
                className="w-20 border-2 border-violet-300 bg-violet-50 text-4xl text-center p-1 rounded"
                placeholder="0"
              />

              <input
                type="string"
                id="second"
                {...register("second", {
                  required: {
                    value: true,
                    message: "otp required",
                  },
                })}
                className="w-20 border-2 border-violet-300 bg-violet-50 text-4xl text-center p-1  rounded"
                placeholder="0"
              />
              <input
                type="string"
                id="third"
                {...register("third", {
                  required: {
                    value: true,
                    message: "otp required",
                  },
                })}
                className="w-20 border-2 border-violet-300 bg-violet-50 text-4xl text-center p-1  rounded"
                placeholder="0"
              />

              <input
                type="string"
                id="fourth"
                {...register("fourth", {
                  required: {
                    value: true,
                    message: "otp required",
                  },
                })}
                className="w-20 border-2 border-violet-300 bg-violet-50 text-4xl text-center p-1  rounded"
                placeholder="0"
              />
            </div>

            <p className="text-gray-400 text-md text-center mt-3 w-1/2 ">
              You can request to{" "}
              <span className="text-violet-950 font-semibold">Resend code</span>{" "}
              in <span className="text-violet-950 font-semibold">0:30</span>
            </p>

            <button
              className="w-4/5 bg-violet-200 hover:bg-violet-100 active:bg-violet-50 text-white text-md font-bold flex items-center justify-center mt-10 rounded-3xl pt-3 pb-3 cursor-pointer"
              disabled={isSubmitting || !isDirty || !isValid}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
