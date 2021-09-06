function readJsonLines(string) {
  return string.split('\n')
    .filter((line) => {
      try {
        JSON.parse(line);

        return true;
      } catch (error) {
        return false;
      }
    })
    .map(line => JSON.parse(line));
}

export default readJsonLines;
