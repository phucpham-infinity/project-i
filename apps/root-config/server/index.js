require("esbuild")
  .build({
    entryPoints: ["./server/server.ts"],
    outfile: "./dist/server.js",
    bundle: true,
    platform: "node",
    target: "node16",
  })
  .catch(() => process.exit(1));
