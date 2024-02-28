// 1-stdin.js

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on("data", function (data) {
  const input = data.toString().trim();
  if (input) {
    console.log(`Your name is: ${input}`);
    process.stdout.write("\nThis important software is now closing\n");
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write("\n");
});
