"use client";
import React, { useState } from "react";
import { Prompt } from "../../model/types/types";
import TickIcon from "@/shared/assets/icons/tick.svg";
import CopyIcon from "@/shared/assets/icons/copy.svg";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
interface PromptProps {
  prompt: Prompt;
  onDelete?: (id: string) => void;
  onEdit?: () => void;
  onTagClick?: (tag: string) => void;
}

export const PromptCard = (props: PromptProps) => {
  const { prompt, onEdit, onTagClick, onDelete } = props;
  const [copied, setCopied] = useState("");
  const { data: session, status } = useSession();
  const pathName = usePathname();
  const canEdit = session?.user?.id === prompt.creator._id;

  const onCopy = () => {
    setCopied(prompt.prompt);
    navigator.clipboard.writeText(prompt.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className={"prompt_card"}>
      <div className={"flex justify-between items-start gap-5"}>
        <Link
          href={
            canEdit
              ? "/profile"
              : `/profile/${prompt.creator._id}?name=${prompt.creator.username}`
          }
          className={
            "flex-1 flex justify-start items-center gap-3 cursor-pointer"
          }
        >
          <Image
            src={prompt.creator.image}
            alt={"user_image"}
            width={40}
            className={"rounded-full object-contain"}
            height={40}
          />
          <div className={"flex flex-col"}>
            <h3 className={"font-satoshi font-semibold prompt-gray-900"}>
              {prompt.creator.username}
            </h3>
            <p className={"font-inter prompt-sm prompt-gray-500"}>
              {prompt.creator.email}
            </p>
          </div>
        </Link>
        <div className={"copy_btn"} onClick={onCopy}>
          <Image
            src={copied === prompt.prompt ? TickIcon : CopyIcon}
            height={12}
            width={12}
            alt={"copy"}
          />
        </div>
      </div>
      <p className={"my-4 font-satoshi prompt-sm prompt-gray-700"}>
        {prompt.prompt}
      </p>
      <p
        className={"font-inter prompt-sm blue_gradient cursor-pointer"}
        onClick={() => onTagClick?.(prompt.tag)}
      >
        {prompt.tag}
      </p>

      {canEdit && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <Link
            href={`/update-prompt/${prompt._id}`}
            className="font-inter text-sm green_gradient cursor-pointer"
          >
            Edit
          </Link>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => onDelete?.(prompt._id)}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};
