"use client";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { AppRoutes, routes } from "@/shared/const/routes";

interface PrivateRouteProps {
  redirectTo?: string;
  children: ReactNode;
}
export const PrivateRoute = ({
  redirectTo = routes[AppRoutes.MAIN](),
  children,
}: PrivateRouteProps) => {
  const { data: session } = useSession();
  if (session) return children;
  else return redirect(redirectTo);
};
