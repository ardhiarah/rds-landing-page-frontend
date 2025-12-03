export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Contact form submission", data);
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, message: "Invalid request" }, { status: 400 });
  }
}
