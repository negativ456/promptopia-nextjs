import React from "react";
import { PromptForm, PromptFormType } from "@/features/PromptForm";

const UpdatePromptPage = ({ params }: { params: { id: string } }) => {
  return <PromptForm promptId={params.id} type={PromptFormType.EDIT} />;
};

export default UpdatePromptPage;
