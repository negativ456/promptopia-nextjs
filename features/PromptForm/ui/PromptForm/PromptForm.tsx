"use client";
import React, { ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getForm } from "../../model/selectors/selectors";
import { promptFormActions } from "../../model/slice/promptFormSlice";
import { PromptFormType } from "../../const/promptConst";
import { useCreatePrompt, useUpdatePrompt } from "../../api/promptFormApi";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { fetchPromptById } from "../../model/service/fetchPromptById";
import { Loader } from "@/shared/ui/Loader/Loader";
import { AppRoutes, routes } from "@/shared/const/routes";

interface PromptFormProps {
  promptId?: string;
  type: PromptFormType;
}

export const PromptForm = (props: PromptFormProps) => {
  const { type, promptId } = props;
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  const { tag, promptText } = useSelector(getForm);
  const submitText = type === PromptFormType.CREATE ? "Create" : "Edit";
  const [updatePromptMutation, { isLoading: isUpdateLoading }] =
    useUpdatePrompt();
  const [createPromptMutation, { isLoading: isCreateLoading }] =
    useCreatePrompt();
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(promptFormActions.setForm({ promptText: e.target.value }));
  };
  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(promptFormActions.setForm({ tag: e.target.value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (type === PromptFormType.EDIT && promptId) {
        await updatePromptMutation({
          _id: promptId,
          prompt: promptText,
          tag,
        });
      } else {
        await createPromptMutation({
          userId: session?.user.id ?? "",
          prompt: promptText,
          tag,
        });
      }
      router.push(routes[AppRoutes.MAIN]());
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(promptFormActions.setForm({ promptText: "", tag: "" }));
    }
  };

  useEffect(() => {
    if (promptId) {
      dispatch(fetchPromptById(promptId));
    }
  }, [dispatch, promptId]);
  return (
    <section className={"w-full max-w-full flex-start flex-col"}>
      <h1 className={"head_text text_left"}>
        <span className={"blue_gradient"}>
          {type === PromptFormType.CREATE ? "Create" : "Edit"} Post
        </span>
      </h1>
      <p className={"desc text_left max-w-md"}>
        {type === PromptFormType.CREATE ? "Create" : "Edit"} and share amazing
        prompts with the world, and let your imagination run wild with any
        AI-powered platform
      </p>
      <form
        onSubmit={onSubmit}
        className={"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"}
      >
        <label>
          <span
            className={"font-satoshi font-semibold prompt-base prompt-gray-700"}
          >
            Your prompt
          </span>
          <textarea
            placeholder={"Write your prompt here"}
            className={"form_textarea resize-none"}
            onChange={onChangeText}
            value={promptText}
            required
          />
        </label>
        <label>
          <span
            className={"font-satoshi font-semibold prompt-base prompt-gray-700"}
          >
            Tag{" "}
            <span className={"font-normal"}>
              (#development, #product, #idea)
            </span>
          </span>
          <input
            placeholder={"#tag"}
            value={tag}
            onChange={onChangeTag}
            className={"form_textarea"}
            required
          />
        </label>
        <div className={"flex-end mx-3 mb-5 gap-4"}>
          <Link
            href={routes[AppRoutes.MAIN]()}
            className={"prompt-gray-500 prompt-sm"}
          >
            Cancel
          </Link>
          <button
            type={"submit"}
            className={
              "px-5 py-1.5 prompt-sm bg-primary-orange text-white rounded-full prompt-white"
            }
          >
            {isCreateLoading || isUpdateLoading ? <Loader /> : submitText}
          </button>
        </div>
      </form>
    </section>
  );
};
