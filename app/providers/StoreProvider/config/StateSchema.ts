import { rtkApi } from "@/shared/api/rtkApi";
import { PromptFormSchema } from "@/features/PromptForm";
import { PromptsFilterSchema } from "@/features/PromptsFilter";
import { PromptSchema } from "@/entities/Prompt";

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  promptForm: PromptFormSchema;
  prompts: PromptSchema;
  promptsFilter: PromptsFilterSchema;
}
