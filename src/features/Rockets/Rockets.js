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
        description: item.description,
        image: item.flickr_images[0],
      }));
    },
  },
});

export default RocketSlice.reducer;
