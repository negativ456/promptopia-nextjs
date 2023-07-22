import { connectToDB } from "@/shared/lib/database";
import Prompt from "@/shared/models/prompt";

export const GET = async () => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify("Failed to fetch all prompts"), {
      status: 500,
    });
  }
};
