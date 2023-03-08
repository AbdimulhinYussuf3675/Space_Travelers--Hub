import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const JoinMission = 'spaceTravelers/mission/JoinMission';
const LeaveMission = 'spaceTravelers/mission/Remove';
const Fetchmission = 'spaceTravelers/mission/Fetchmission';

// API
const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

// Reducer
export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case JoinMission:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: true };
      });

    case LeaveMission:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: false };
      });

    case Fetchmission:
      return action.payload;
    default:
      return [...state];
  }
}

// Actions creators
export const joinMission = (payload) => ({
  type: JoinMission,
  payload,
});

export const leaveMission = (payload) => ({
  type: LeaveMission,
  payload,
});

// Fetch Missions
export const getMissions = createAsyncThunk(
  Fetchmission,
  async (_, { dispatch }) => {
    const response = await fetch(URL);
    const objectData = await response.json();
    const newObj = objectData.map((mission) => ({ ...mission, joined: false }));
    dispatch({
      type: Fetchmission,
      payload: newObj,
    });
  },
);
