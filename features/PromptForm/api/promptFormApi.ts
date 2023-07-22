import { rtkApi } from "@/shared/api/rtkApi";
import { Prompt } from "@/entities/Prompt";

interface CreatePromptArgs {
  userId: string;
  prompt: string;
  tag: string;
}

interface UpdatePromptArgs {
  prompt: string;
  tag: string;
  _id: string;
}

const promptFromApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updatePrompt: build.mutation<Prompt, UpdatePromptArgs>({
      query: (prompt) => ({
        url: `prompt/${prompt._id}`,
        method: "PATCH",
        body: prompt,
      }),
      invalidatesTags: ["Prompt"],
    }),
    createPrompt: build.mutation<Prompt, CreatePromptArgs>({
      query: (prompt) => ({
        url: "prompt/new",
        method: "POST",
        body: prompt,
      }),
      invalidatesTags: ["Prompt"],
    }),
  }),
});

export const useUpdatePrompt = promptFromApi.useUpdatePromptMutation;
export const useCreatePrompt = promptFromApi.useCreatePromptMutation;
