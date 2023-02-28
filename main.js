import { execa } from "execa";

const child = execa("main.exe");

child.stdout.on("data", (data) => {
  console.log(`go-to-node: ${data}`);
});

child.stdin.write("Hello from Node.js!\n");
