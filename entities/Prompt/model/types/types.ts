import { User } from "@/entities/User";

export interface Prompt {
  _id: string;
  creator: User;
  prompt: string;
  tag: string;
}

export interface PromptSchema {
  prompts: Prompt[];
}
