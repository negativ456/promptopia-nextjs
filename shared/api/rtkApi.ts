import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const url = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://promptopia-nextjs-ebon.vercel.app/api/`,
  }),
  tagTypes: ["Prompt", "User"],
  endpoints: (builder) => ({}),
});
