import React from "react";
import { Skeleton } from "@/shared/ui/Skeletons/Skeleton";

const Loading = () => {
  return (
    <div className={"w-full max-w-full flex-start flex-col"}>
      <Skeleton className={"w-[263px] h-[50px]"} />
      <Skeleton className={"mt-10 w-[672px] h-[50px]"} />
      <Skeleton className={"mt-10 w-[672px] h-[620px]"} />
      <div className={"w-[672px] flex-end m-3 mb-5 gap-4"}>
        <Skeleton className={"w-[66px] h-[30px]"} />
        <Skeleton className={"w-[66px] h-[30px]"} />
      </div>
    </div>
  );
};

export default Loading;
