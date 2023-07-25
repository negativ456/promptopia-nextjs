import React from "react";
import { CreatePromptPage } from "@/pages-flat/CreatePromptPage";
import { PrivateRoute } from "@/shared/ui/PrivateRoute/PrivateRoute";

const CreatePrompt = () => {
  return (
    <PrivateRoute>
      <CreatePromptPage />;
    </PrivateRoute>
  );
};

export default CreatePrompt;
