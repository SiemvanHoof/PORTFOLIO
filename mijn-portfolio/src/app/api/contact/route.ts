import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);

  if (!data?.name || !data?.email || !data?.message) {
    return NextResponse.json({ ok: false, error: "Vul naam, e-mail en bericht in." }, { status: 400 });
  }

  console.log("Nieuw contactbericht:", data);

  return NextResponse.json({ ok: true });
}