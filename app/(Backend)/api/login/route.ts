import { NextResponse } from "next/server";
import connectToDb from "@/utils/connectToDb";
import * as bcrypt from "bcrypt";
import { User } from "@/utils/userModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
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
    const payload = { username, password };
    const KEY = "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq";
    if (passwordMatched) {
      const key = await jwt.sign(payload, KEY, {
        expiresIn: 31556926, // 1 year in seconds
      });

      cookies().set({
        name: "eccom",
        value: key,
        httpOnly: true,
      });
      return NextResponse.json({ ok: "ok" });
    }
    return NextResponse.json({ error: "Invalid Password", ok: false });
  } catch (error) {
    return NextResponse.json(error);
  }
}
