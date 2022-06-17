import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: () => ({}),
  reducerPath: "serviceApi",
});

export default service;
