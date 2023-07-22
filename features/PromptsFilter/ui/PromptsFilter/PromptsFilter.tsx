"use client";
import { useSelector } from "react-redux";
import { getSearch, promptsFilterActions } from "@/features/PromptsFilter";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import React from "react";

export const PromptsFilter = () => {
  const searchText = useSelector(getSearch);
  const dispatch = useAppDispatch();
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(promptsFilterActions.setSearch(e.target.value));
  };
  return (
    <form className="relative w-full flex-center mt-10">
      <input
        type="text"
        placeholder="Search for a tag or a username"
        value={searchText}
        onChange={onChangeSearch}
        required
        className="search_input peer"
      />
    </form>
  );
};
