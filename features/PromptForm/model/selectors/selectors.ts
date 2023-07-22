import { StateSchema } from "@/app/providers/StoreProvider";

export const getForm = (state: StateSchema) => state.promptForm.form;
