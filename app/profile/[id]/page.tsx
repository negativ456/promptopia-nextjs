"use client";
import React from "react";
import { ProfileCard } from "@/features/ProfileCard";
import { useSearchParams } from "next/navigation";

const UserProfile = ({ params }: { params: { id: string } }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  return (
    <ProfileCard
      id={params.id}
      name={userName ?? ""}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
    />
  );
};

export default UserProfile;
