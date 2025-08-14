import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  const data = await req.json();

  await prisma.user.create({
    data: { username: data.username, password: data.password },
  });

  return NextResponse.json({
    message: "Sign Up Successful",
  });
}
