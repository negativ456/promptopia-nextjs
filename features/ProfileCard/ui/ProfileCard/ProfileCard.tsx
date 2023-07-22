"use client";
import { useDeletePrompt, useUserPrompts } from "../../api/profileApi";
import { PromptList } from "@/entities/Prompt";
import React from "react";
import { DeleteModal } from "@/features/ProfileCard";
import { useModal } from "@/shared/lib/hooks/useModal";

interface ProfileCardProps {
  id: string;
  name: string;
  desc: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { id, name, desc } = props;
  const { isLoading, data, error } = useUserPrompts(id);
  const [deletePrompt] = useDeletePrompt();
  const [isVisible, { openModal, closeModal, extra }] = useModal<string>();

  const onDelete = (id: string | null) => {
    if (id) {
      deletePrompt(id);
      closeModal();
    }
  };

  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <PromptList
        className={"mt-10 prompt_layout"}
        prompts={data}
        isLoading={isLoading}
        onDelete={(id) => openModal(id)}
      />
      <DeleteModal
        onDelete={() => onDelete(extra)}
        isOpen={isVisible}
        onClose={closeModal}
      />
    </section>
  );
};
