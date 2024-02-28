process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  /**
   * The data read from the standard input.
   * @type {string|null}
   */
  const data = process.stdin.read();
  if (data) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
