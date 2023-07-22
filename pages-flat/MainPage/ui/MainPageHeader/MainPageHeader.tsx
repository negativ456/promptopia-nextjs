import React from "react";

const MainPageHeader = () => {
  return (
    <>
      <h1 className="head_text text-center">
        Discover & Share
        <br className={"max-md:hidden"} />
        <span className={"orange_gradient prompt-center"}>
          AI-Powered Prompts
        </span>
      </h1>
      <p className={"desc text-center"}>
        Promtopia is an open source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
    </>
  );
};

export default MainPageHeader;
