export default async (req) => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const GAS_ENDPOINT = process.env.GAS_ENDPOINT;
  if (!GAS_ENDPOINT) {
    return new Response(JSON.stringify({ error: "Server not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = await req.formData();

    if ((data.get("company") || "").toString().trim()) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const fname = (data.get("fname") || "").toString().trim();
    const lname = (data.get("lname") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const zip = (data.get("zip") || "").toString().trim();

    if (!fname || !lname) {
      return new Response(JSON.stringify({ error: "Missing name" }), { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }
    if (!/^\d{5}(-\d{4})?$/.test(zip)) {
      return new Response(JSON.stringify({ error: "Invalid zip" }), { status: 400 });
    }

    const body = new URLSearchParams({ fname, lname, email, zip, source: "start-page" });
    const resp = await fetch(GAS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!resp.ok) {
      return new Response(JSON.stringify({ error: "Upstream error" }), { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
};
