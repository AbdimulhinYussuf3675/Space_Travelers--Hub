const { createAsyncThunk } = require('@reduxjs/toolkit');

const URL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = createAsyncThunk('rocket/getRockets', async () => fetch(URL).then((res) => res.json()));

export default getRockets;
