import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isMobileMenuOpen: false,
};

const mobileSlice = createSlice({
  name: 'mobile',
  initialState: INITIAL_STATE,
  reducers: {
    setIsMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
  },
});

export const { setIsMobileMenuOpen } = mobileSlice.actions;

export default mobileSlice.reducer;
