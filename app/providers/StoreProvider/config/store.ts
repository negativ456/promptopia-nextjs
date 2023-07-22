import { ReducersMapObject } from "redux";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { rtkApi } from "@/shared/api/rtkApi";
import { configureStore } from "@reduxjs/toolkit";
import { promptFormReducer } from "@/features/PromptForm";
import { promptsFilterReducer } from "@/features/PromptsFilter";
import { promptReducer } from "@/entities/Prompt";

export function createReduxStore() {
  const rootReducer: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
    promptForm: promptFormReducer,
    promptsFilter: promptsFilterReducer,
    prompts: promptReducer,
  };

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
