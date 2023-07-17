/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const adminSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
});
export const {} = adminSlice.actions;
export default adminSlice.reducer;
