import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    alerts: {
      isOpen: false,
      type: "success",
      msg: "i am shubham",
    },
  },
  reducers: {
    handleAlert: (state, action) => {
      // if (state.alerts.isOpen == false) {
      //   state.alerts = action.payload;
      // }
      // console.log(action.payload, 'slice')
      state.alerts = action.payload;
    },
  },
});

export const { handleAlert } = alertSlice.actions;

export default alertSlice.reducer;
