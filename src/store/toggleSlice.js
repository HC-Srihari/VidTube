import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggleFlag: true,
  },
  reducers: {
    setToggleFlag: (state) => {
      state.toggleFlag = !state.toggleFlag;
    },
    setToggleFalse: (state) => {
      state.toggleFlag = false;
    },
  },
});

export const { setToggleFalse, setToggleFlag } = toggleSlice.actions;
export default toggleSlice.reducer;
