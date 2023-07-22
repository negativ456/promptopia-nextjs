"use client";
import React from "react";
import { Prompt } from "../../model/types/types";
import { PromptCard } from "@/entities/Prompt";
import { PromptSkeleton } from "@/shared/ui/Skeletons/PromptSkeleton/PromptSkeleton";

interface PromptListProps {
  prompts?: Prompt[];
  className?: string;
  onTagClick?: () => void;
  onDelete?: (id: string) => void;
  onEdit?: () => void;
  isLoading?: boolean;
}

export const PromptList = (props: PromptListProps) => {
  const { prompts, className, isLoading, onEdit, onTagClick, onDelete } = props;

  if (isLoading) {
    return (
      <div className={"mt-16 prompt_layout"}>
        {new Array(3).fill(0).map((item, idx) => (
          <PromptSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className={className}>
      {prompts?.length ? (
        prompts.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            onDelete={onDelete}
            onEdit={onEdit}
            onTagClick={onTagClick}
          />
        ))
      ) : (
        <p>There is no prompts</p>
      )}
    </div>
  );
};
