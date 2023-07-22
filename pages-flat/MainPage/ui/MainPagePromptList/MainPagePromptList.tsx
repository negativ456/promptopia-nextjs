"use client";
import React, { useMemo } from "react";
import { PromptList } from "@/entities/Prompt";
import { usePromptList } from "@/pages-flat/MainPage/api/promptApi";
import { useSelector } from "react-redux";
import { getSearch } from "@/features/PromptsFilter";

const MainPagePromptList = () => {
  const { isLoading, data: prompts, error } = usePromptList();

  const searchText = useSelector(getSearch);
  const filteredPrompts = useMemo(() => {
    const regex = new RegExp(searchText, "i");
    return (
      prompts?.filter(
        (item) =>
          regex.test(item.creator.username) ||
          regex.test(item.tag) ||
          regex.test(item.prompt)
      ) ?? []
    );
  }, [prompts, searchText]);

  if (error) {
    return <div>Error while getting prompts</div>;
  }

  return (
    <PromptList
      className={"mt-16 prompt_layout"}
      isLoading={isLoading}
      prompts={filteredPrompts}
    />
  );
};

export default MainPagePromptList;
