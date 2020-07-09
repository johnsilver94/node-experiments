import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import router from "./routes.ts";

const port = Deno.env.get("PORT") || 5000;

// Starting the server
const app = new Application();
app.use(oakCors()); // Enabled Cors
app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Listening on port ${port}`);
await app.listen({ port: +port });
