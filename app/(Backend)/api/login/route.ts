import { NextResponse } from "next/server";
import connectToDb from "@/utils/connectToDb";
import * as bcrypt from "bcrypt";
import { User } from "@/utils/userModel";
import { cookies } from "next/headers";
connectToDb();
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;
    const res = await User.findOne({ username });
    if (res === null) {
      return NextResponse.json({ error: "Invalid Username", ok: false });
    }
    const passwordMatched = await bcrypt.compare(password, res.password);
    if (passwordMatched) {
      cookies().set({
        name: "eccom",
        value: username,
        httpOnly: true,
      });
      return NextResponse.json({ ok: "ok" });
    }
    return NextResponse.json({ error: "Invalid Password", ok: false });
  } catch (error) {
    return NextResponse.json(error);
  }
}
