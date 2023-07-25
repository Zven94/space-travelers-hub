import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missionsArr: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
});

export default missionSlice.reducer;
