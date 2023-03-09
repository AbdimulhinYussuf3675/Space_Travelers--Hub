import getRockets from './RocketsThunk';

const { createSlice } = require('@reduxjs/toolkit');

const RocketSlice = createSlice({
  name: 'rocket',
  initialState: [],
  reducers: {
    reserveRocket: (state, { payload }) => state.map((rocket) => ((rocket.id === payload)
      ? { ...rocket, reserved: !rocket.reserved } : rocket)),
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, { payload }) => {
      state = payload.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        description: item.description,
        image: item.flickr_images[0],
        reserved: false,
      }));
      return state;
    },
  },
});
export const { reserveRocket } = RocketSlice.actions;
export default RocketSlice.reducer;
