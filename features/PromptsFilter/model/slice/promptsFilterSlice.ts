import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PromptsFilterSchema } from "../types/promptsFilterSchema";

const initialState: PromptsFilterSchema = {
  search: "",
};

export const promptsFilterSlice = createSlice({
  name: "promptsFilter",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { actions: promptsFilterActions } = promptsFilterSlice;
export const { reducer: promptsFilterReducer } = promptsFilterSlice;
