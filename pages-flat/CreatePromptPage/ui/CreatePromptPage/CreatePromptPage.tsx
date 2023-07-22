import React from "react";
import { PromptForm } from "@/features/PromptForm";
import { PromptFormType } from "@/features/PromptForm";

export const CreatePromptPage = () => {
  return <PromptForm type={PromptFormType.CREATE} />;
};
