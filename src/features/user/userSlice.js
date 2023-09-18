import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.user = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
