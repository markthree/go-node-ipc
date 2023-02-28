import { execa } from "execa";

const child = execa("main.exe");

child.stdout.on("data", (data) => {
  console.log(`${data}`);
});

setTimeout(exit, 30000);

randomSend();
setInterval(randomSend, 3000);

function randomSend() {
  child.stdin.write(String(Math.ceil(Math.random() * 100)) + "\n");
}

function exit() {
  child.cancel();
  process.exit(0);
}
