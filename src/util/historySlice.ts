import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type HistoryState = {
  searchHistory: {}[];
};

const INITIAL_STATE: HistoryState = {
  searchHistory: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState: INITIAL_STATE,
  reducers: {
    addToHistory: (state, action: PayloadAction<object>) => {
      state.searchHistory = [...state.searchHistory, action.payload];
    },
  },
});


export const historyReducer =   historySlice.reducer;
export const { addToHistory } = historySlice.actions;
export const selectSearchHistory = (state: RootState) =>
  state.history.searchHistory;
