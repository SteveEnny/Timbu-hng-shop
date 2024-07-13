import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  City: "",
  Zip: "",
  phoneNum: "",
  card: "",
  expDate: "",
  cvv: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getDetails(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
