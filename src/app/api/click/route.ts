import { NextRequest, NextResponse } from "next/server";
import getMongoClientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

type LinkClickDoc = {
  linkId: string;
  count: number;
};

export async function GET() {
  const client = await getMongoClientPromise();
  const db = client.db(process.env.MONGODB_DB || "linknamu");

  const docs = await db
    .collection<LinkClickDoc>("linkClicks")
    .find({})
    .toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc.linkId] = doc.count;
  }

  return NextResponse.json(counts, {
    headers: { "Cache-Control": "no-store" },
  });
}

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
