"use client";
import React, { ReactNode } from "react";
import { createReduxStore } from "@/app/providers/StoreProvider/config/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const store = createReduxStore();
  return <Provider store={store}>{children}</Provider>;
};
