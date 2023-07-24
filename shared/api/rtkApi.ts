import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXTAUTH_URL}api/`,
  }),
  tagTypes: ["Prompt", "User"],
  endpoints: (builder) => ({}),
});
