import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Prompt, PromptSchema } from "../types/types";

const initialState: PromptSchema = {
  prompts: [],
};

export const promptSlice = createSlice({
  name: "prompt",
  initialState,
  reducers: {
    setPrompts: (state, action: PayloadAction<Prompt[]>) => {
      state.prompts = action.payload;
    },
    addPrompt: (state, action: PayloadAction<Prompt>) => {
      state.prompts.push(action.payload);
    },
    updatePrompt: (state, action: PayloadAction<Prompt>) => {
      state.prompts = state.prompts.map((prompt) =>
        prompt._id === action.payload._id ? action.payload : prompt
      );
      console.log(
        state.prompts.map((prompt) =>
          prompt._id === action.payload._id ? action.payload : prompt
        )
      );
    },
  },
});
export const { actions: promptActions } = promptSlice;
export const { reducer: promptReducer } = promptSlice;
