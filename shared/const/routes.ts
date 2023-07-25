export enum AppRoutes {
  MAIN,
  CREATE,
  UPDATE,
  PROFILE,
}

interface RouteParams {
  paramName: string;
  value: string;
}

export const routes: Record<
  AppRoutes,
  (id?: string, params?: RouteParams) => string
> = {
  [AppRoutes.MAIN]: () => "/",
  [AppRoutes.CREATE]: () => "/create-prompt",
  [AppRoutes.UPDATE]: (id?: string) => `/update-prompt/${id}`,
  [AppRoutes.PROFILE]: (id?: string, params?: RouteParams) =>
    `/profile/${id}${params ? `?${params.paramName}=${params.value}` : ""}`,
};
