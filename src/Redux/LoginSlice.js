import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "LoginModal",
  initialState: {
    isOpen: false,
 
  },
  reducers: {
    handleModalOpen: (state, action) => {
      // if (state.alerts.isOpen == false) {
      //   state.alerts = action.payload;
      // }
      console.log(action.payload, "slice");

      state.isOpen = action.payload;
    },
  },
});

export const { handleModalOpen } = loginSlice.actions;

export default loginSlice.reducer;
