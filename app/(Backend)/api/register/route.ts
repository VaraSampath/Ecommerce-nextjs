import { NextResponse } from "next/server";
import connectToDb from "@/utils/connectToDb";
import { User } from "@/utils/userModel.js";

import bcrypt from "bcrypt";
connectToDb();
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password, fullname } = body;
    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = new User({
      username,
      password: hashedPassword,
      userDetails: { fullname },
    });
    await user.save();

    return NextResponse.json({ user, ok: true });
  } catch (error) {
    return NextResponse.json(error);
  }
}
