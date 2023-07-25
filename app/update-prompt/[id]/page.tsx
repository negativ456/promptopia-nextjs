import React from "react";
import { PromptForm, PromptFormType } from "@/features/PromptForm";
import { PrivateRoute } from "@/shared/ui/PrivateRoute/PrivateRoute";

const UpdatePromptPage = ({ params }: { params: { id: string } }) => {
  return (
    <PrivateRoute>
      <PromptForm promptId={params.id} type={PromptFormType.EDIT} />
    </PrivateRoute>
  );
};

export default UpdatePromptPage;
