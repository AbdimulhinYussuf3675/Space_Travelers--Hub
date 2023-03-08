import { createAsyncThunk } from '@reduxjs/toolkit';

const JoinMission = 'spaceTravelers/mission/JoinMission';
const LeaveMission = 'spaceTravelers/mission/Remove';
const Fetchmission = 'spaceTravelers/mission/Fetchmission';

const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

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

export const joinMission = (payload) => ({
  type: JoinMission,
  payload,
});

export const leaveMission = (payload) => ({
  type: LeaveMission,
  payload,
});

export const getMissions = createAsyncThunk(
  Fetchmission,
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
      type: Fetchmission,
      payload: newObj,
    });
  },
);
