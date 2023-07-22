import { createAsyncThunk } from "@reduxjs/toolkit";
import { Prompt } from "@/entities/Prompt";

export const fetchPromptById = createAsyncThunk<Prompt, string>(
  "profile/fetchProfileData",
  async (promptId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    } catch (e) {
      return rejectWithValue("error");
    }
  }
);
