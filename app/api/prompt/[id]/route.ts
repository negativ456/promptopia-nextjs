import { connectToDB } from "@/shared/lib/database";
import Prompt from "@/shared/models/prompt";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, { params }: Params) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify("Failed to fetch all prompts"), {
      status: 500,
    });
  }
};

export const PATCH = async (request: Request, { params }: Params) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify("Failed to update the prompt"), {
      status: 500,
    });
  }
};

export const DELETE = async (request: Request, { params }: Params) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify("Failed to delete the prompt"), {
      status: 500,
    });
  }
};
