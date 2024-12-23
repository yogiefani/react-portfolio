import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    clients: 0,
    privacy: 0,
    rating: 0,
    projects: 0,
  },
  reducers: {
    setStats: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStats } = statsSlice.actions;
export default statsSlice.reducer;
