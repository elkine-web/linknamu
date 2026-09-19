import { NextRequest, NextResponse } from "next/server";
import getMongoClientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId가 필요합니다." }, { status: 400 });
  }

  const client = await getMongoClientPromise();
  const db = client.db(process.env.MONGODB_DB || "linknamu");

  await db
    .collection("linkClicks")
    .updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });

  return NextResponse.json({ ok: true });
}
