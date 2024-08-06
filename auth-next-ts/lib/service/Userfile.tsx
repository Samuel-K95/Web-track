import formType from "@/app/formType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { verifyType } from "@/app/formType";
import { loginType } from "@/app/formType";

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (newUser: formType) => ({
        url: "/signup",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
          confirmPassword: newUser.confirmPassword,
        },
      }),
    }),
    verifyUser: builder.mutation({
      query: (data: verifyType) => ({
        url: "/verify-email",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email: data.email,
          otp: data.otp,
        },
      }),
    }),
    UserLogin: builder.mutation({
      query: (data: loginType) => ({
        url: "/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {
          email: data.email,
          password: data.password,
        },
      }),
    }),
  }),
});

export const {
  useAddNewUserMutation,
  useVerifyUserMutation,
  useUserLoginMutation,
} = userApi;
