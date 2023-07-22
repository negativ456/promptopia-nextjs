import React from "react";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";
import { PromptSkeleton } from "@/shared/ui/Skeletons/PromptSkeleton/PromptSkeleton";

const Loading = () => {
  return (
    <div>
      <Skeleton className={"sm:w-[310px] w-[250px] h-[50px] mt-5"} />
      <Skeleton className={"sm:w-[670px] w-full sm:h-[50px] h-[85px] mt-5"} />
      <div className={"mt-10 prompt_layout"}>
        <PromptSkeleton />
        <PromptSkeleton />
        <PromptSkeleton />
      </div>
    </div>
  );
};

export default Loading;
