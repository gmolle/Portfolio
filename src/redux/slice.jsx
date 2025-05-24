import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  techFilter: [],
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setTechFilter: (state, action) => {
      state.techFilter = action.payload;
    },
  },
});

export const { setSearchQuery, setTechFilter } = portfolioSlice.actions;
export default portfolioSlice.reducer;
