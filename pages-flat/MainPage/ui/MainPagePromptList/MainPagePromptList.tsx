"use client";
import React, { useMemo } from "react";
import { PromptList } from "@/entities/Prompt";
import { usePromptList } from "@/pages-flat/MainPage/api/promptApi";
import { useSelector } from "react-redux";
import { getSearch, promptsFilterActions } from "@/features/PromptsFilter";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

const MainPagePromptList = () => {
  const { isLoading, data: prompts, error } = usePromptList();

  const searchText = useSelector(getSearch);
  const dispatch = useAppDispatch();
  const onTagClick = (tag: string) => {
    dispatch(promptsFilterActions.setSearch(tag));
  };
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
      onTagClick={onTagClick}
    />
  );
};

export default MainPagePromptList;
