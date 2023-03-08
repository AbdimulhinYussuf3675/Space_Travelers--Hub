import getRockets from './RocketsThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  rockets: [],
};
const RocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.fulfilled]: (state, { payload }) => {
      state.rockets = payload;
    },
  },
});

export default RocketSlice.reducer;
