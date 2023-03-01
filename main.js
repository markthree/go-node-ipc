import { execa } from "execa";
import { createInterface } from "node:readline";

const child = execa("main.exe");

const readline = createInterface({
  input: child.stdout,
});

readline.on("line", (data) => {
  console.log(data);
});

setTimeout(exit, 30000);

randomSend();
setInterval(randomSend, 500);

function randomSend() {
  child.stdin.write(String(Math.ceil(Math.random() * 100)) + ",");
}

function exit() {
  readline.close();
  child.cancel();
  process.exit(0);
}
