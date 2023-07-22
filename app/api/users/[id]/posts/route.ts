import { connectToDB } from "@/shared/lib/database";
import Prompt from "@/shared/models/prompt";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, { params }: Params) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify("Failed to fetch all prompts"), {
      status: 500,
    });
  }
};
