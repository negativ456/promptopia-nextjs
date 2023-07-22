"use client";
import MainPageHeader from "@/pages-flat/MainPage/ui/MainPageHeader/MainPageHeader";
import MainPagePromptList from "@/pages-flat/MainPage/ui/MainPagePromptList/MainPagePromptList";
import { PromptsFilter } from "@/features/PromptsFilter";

export const MainPage = () => {
  return (
    <section className={"w-full flex-center flex-col"}>
      <MainPageHeader />
      <PromptsFilter />
      <MainPagePromptList />
    </section>
  );
};
