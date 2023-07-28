import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  return response.data;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    selectedRocket: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    selectRocket: (state, action) => {
      state.selectedRocket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          flickr_images: rocket.flickr_images,
        }));
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;
