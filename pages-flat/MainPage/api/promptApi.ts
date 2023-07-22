import { rtkApi } from "@/shared/api/rtkApi";
import { Prompt } from "@/entities/Prompt";

const promptApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPrompts: build.query<Prompt[], void>({
      query: () => ({
        url: "prompt",
      }),
      providesTags: ["Prompt"],
    }),
  }),
});

export const usePromptList = promptApi.useGetPromptsQuery;
