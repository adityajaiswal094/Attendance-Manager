import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  ids: [],
};

const scanLogsSlice = createSlice({
  name: 'scanLogs',
  initialState,
  reducers: {
    addLogs: (state, action) => {
      state.ids.push(action.payload.time);
    },
    resetLogs: (state, action) => {
      state.ids = [];
    },
  },
});

export const addLogs = scanLogsSlice.actions.addLogs;
export const resetLogs = scanLogsSlice.actions.resetLogs;
export default scanLogsSlice.reducer;
