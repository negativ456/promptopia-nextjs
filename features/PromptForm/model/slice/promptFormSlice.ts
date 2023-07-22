import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PromptFormSchema } from "@/features/PromptForm";
import { fetchPromptById } from "../service/fetchPromptById";
import { Prompt } from "@/entities/Prompt";

const initialState: PromptFormSchema = {
  form: {
    promptText: "",
    tag: "",
  },
};

export const promptFormSlice = createSlice({
  name: "promptForm",
  initialState,
  reducers: {
    setForm(state, action) {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPromptById.fulfilled,
      (state, action: PayloadAction<Prompt>) => {
        state.form = {
          promptText: action.payload.prompt,
          tag: action.payload.tag,
        };
      }
    );
  },
});

export const { actions: promptFormActions } = promptFormSlice;
export const { reducer: promptFormReducer } = promptFormSlice;
