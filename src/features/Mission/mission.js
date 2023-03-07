import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mission: [],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {},
});

export default missionSlice.reducer;
