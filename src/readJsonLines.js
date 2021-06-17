function readJsonLines(string) {
  return string.split('\n')
    .filter(line => line)
    .filter(line => line.startsWith('{')
    .filter(line => line.endsWith('}')
    .map(line => line.trim())
    .map(line => JSON.parse(line));
}

export default readJsonLines;
