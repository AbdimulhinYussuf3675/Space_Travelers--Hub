import { createAsyncThunk } from '@reduxjs/toolkit';

const JOINMission = 'spaceTravelers/mission/JoinMission';
const LEAVEMission = 'spaceTravelers/mission/Remove';
const FETCHmission = 'spaceTravelers/mission/Fetchmission';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case JOINMission:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: true };
      });

    case LEAVEMission:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: false };
      });

    case FETCHmission:
      return action.payload;
    default:
      return [...state];
  }
}

export const joinMission = (payload) => ({
  type: JOINMission,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVEMission,
  payload,
});

export const getMissions = createAsyncThunk(
  FETCHmission,
  async (_, { dispatch }) => {
    const response = await fetch(URL);
    const objectData = await response.json();
    const newObj = objectData.map((mission) => ({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      joined: false,
    }));
    dispatch({
      type: FETCHmission,
      payload: newObj,
    });
  },
);
