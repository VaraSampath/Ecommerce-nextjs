import { NextResponse } from "next/server";
import connectToDb from "@/utils/connectToDb";

import { User } from "@/utils/userModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
connectToDb();
export async function GET(req: Request) {
  try {
    const token: any = cookies().get("eccom");
    console.log(token);

    const decoded: any = await jwt.verify(
      token.value,
      "$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq"
    );

    const res = await User.findOne({ username: decoded.username });
    if (res == null) {
      cookies().delete("eccom");
      return NextResponse.json({ ok: false, error: "Something Went Wrong" });
    }
    return NextResponse.json({
      ok: true,
      userDetails: res.userDetails,
      cartDetails: res.cartDetails,
      favorites: res.favorites,
    });
  } catch (err) {
    return NextResponse.json({ ok: false, error: err });
  }
}
