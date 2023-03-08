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
      state.rockets = payload.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        type: item.rocket_type,
        flickr_images: item.flickr_images[0],
      }));
    },
  },
});

export default RocketSlice.reducer;
