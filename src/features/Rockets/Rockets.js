import getRockets from './RocketsThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  rockets: [],
};
const RocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserverRocket: (state, { payload }) => {
      state.rockets = state.rockets.map((rocket) => ((rocket.id === payload)
        ? { ...rocket, reserved: true } : rocket));
    },
  },
  extraReducers: {
    [getRockets.fulfilled]: (state, { payload }) => {
      state.rockets = payload.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        description: item.description,
        image: item.flickr_images[0],
        reserved: false,
      }));
    },
  },
});
export const { reserverRocket } = RocketSlice.actions;
export default RocketSlice.reducer;
