import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
      query: (accessToken: string = "") => ({
        url: "/opportunities/search",
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),

    getJobById: builder.query({
      query: (id) => `/opportunities/${id}`,
    }),
    getBookmarks: builder.query({
      query: (accessToken) => ({
        url: "/bookmarks",
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    createBookmark: builder.mutation({
      query: ({ id, accessToken }: { id: string; accessToken: string }) => ({
        url: `/bookmarks/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
    unBookmark: builder.mutation({
      query: ({ id, accessToken }: { id: string; accessToken: string }) => ({
        url: `/bookmarks/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useGetBookmarksQuery,
  useCreateBookmarkMutation,
  useUnBookmarkMutation,
} = jobsApi;
