"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { ProfileCard } from "@/features/ProfileCard";
import { PrivateRoute } from "@/shared/ui/PrivateRoute/PrivateRoute";

const ProfilePage = () => {
  const { data: session, status } = useSession();

  return (
    <PrivateRoute>
      <ProfileCard
        id={session?.user?.id ?? ""}
        name={"My"}
        desc={
          "Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
        }
      />
    </PrivateRoute>
  );
};

export default ProfilePage;
