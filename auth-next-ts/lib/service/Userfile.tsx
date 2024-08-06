import formType from "@/app/formType";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
    // getUserByEmail: builder.query({}),
  }),
});

export const { useAddNewUserMutation } = userApi;
