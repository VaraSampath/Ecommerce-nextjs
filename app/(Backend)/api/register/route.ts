import { NextResponse } from "next/server";
import connectToDb from "@/utils/connectToDb";
import { User } from "@/utils/userModel.js";
connectToDb();
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;

    const user = new User({ username, password });

    await user.save();

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error);
  }
}
