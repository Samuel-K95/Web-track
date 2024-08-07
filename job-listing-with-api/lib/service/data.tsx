import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import JobType from "@/app/JobType";

/**
 * This is the file that uses Redx tool kit to connect with the baseurl,
 * and make requests to the specified end points. in our case getting all
 * opportunities and getting a specific job based on id
 */
export const jobsApi = createApi({
  reducerPath: "opportunities",
  baseQuery: fetchBaseQuery({ baseUrl: "https://akil-backend.onrender.com/" }),
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => "/opportunities/search",
    }),

    getJobById: builder.query({
      query: (id) => `/opportunities/${id}`,
    }),
  }),
});

export const { useGetAllJobsQuery, useGetJobByIdQuery } = jobsApi;
