import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import ResortModel from "../models/Ressort.model";

const initialState: ResortModel[] = [];
const bucket = createSlice({
  initialState,
  name: "bucket",
  reducers: {
    toggleBucket: (state, { payload }: PayloadAction<ResortModel>) => {
      const isEx = state.findIndex((item) => item.id === payload.id);
      if (isEx < 0) return [...state, payload];
      return state.filter((item) => item.id !== payload.id);
    },
  },
});

export const { toggleBucket } = bucket.actions;
export default bucket;
