import ResortModel from "../../models/Ressort.model";
import service from ".";

const resortApi = service.injectEndpoints({
  endpoints: (build) => ({
    getResorts: build.query<ResortModel[], void>({
      query: () => ({ url: "/resorts" }),
    }),
    getResort: build.query<ResortModel, { id: string }>({
      query: ({ id }) => ({ url: `/resorts/${id}` }),
    }),
  }),
});

export const { useGetResortsQuery, useGetResortQuery } = resortApi;
