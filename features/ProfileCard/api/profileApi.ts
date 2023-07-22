import { rtkApi } from "@/shared/api/rtkApi";
import { Prompt } from "@/entities/Prompt";

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUserPrompts: build.query<Prompt[], string>({
      query: (id) => ({
        url: `users/${id}/posts`,
      }),
      providesTags: ["Prompt"],
    }),
    deletePrompt: build.mutation<Prompt, string>({
      query: (id) => ({
        url: `prompt/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Prompt"],
    }),
  }),
});

export const useUserPrompts = profileApi.useGetUserPromptsQuery;
export const useDeletePrompt = profileApi.useDeletePromptMutation;
