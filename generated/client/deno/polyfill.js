globalThis.process = { env: Deno.env.toObject() };
globalThis.global = globalThis;