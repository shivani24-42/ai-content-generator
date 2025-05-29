import { NextResponse } from "next/server";
import { getUserUsage } from "@/utils/getUserUsage";
import { currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const user = await currentUser();
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const usage = await getUserUsage(email);
  return NextResponse.json({ usage });
}
