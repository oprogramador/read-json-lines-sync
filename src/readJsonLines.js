function readJsonLines(string) {
  return string.split('\n')
    .filter(line => line)
    .map(line => line.trim())
    .map(line => JSON.parse(line));
}

module.exports = readJsonLines;
