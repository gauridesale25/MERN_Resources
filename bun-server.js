import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello Ice tea", { status: 200 });
    } else if (url.pathname === "/iceteahihai") {
      return new Response("sab thik hai", { status: 200 });
    } else {
      return new response("phirse 404 wala error", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
