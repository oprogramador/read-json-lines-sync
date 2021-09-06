import expect from 'read-json-lines-sync/tests/expect';
import readJsonLines from 'read-json-lines-sync/readJsonLines';

describe('readJsonLines', () => {
  it('returns empty array for an empty string', () => {
    const lines = '';

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([]);
  });

  it('returns a one-element array for a one-line string', () => {
    const lines = '{"foo":"bar"}';

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
    ]);
  });

  it('returns a two-element array for a two-line string', () => {
    const lines = `{"foo":"bar"}
{"foo2":"bar2"}
`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
      { foo2: 'bar2' },
    ]);
  });

  it('returns a three-element array for a three-line string', () => {
    const lines = `{"foo":"bar"}
{"foo2":"bar2"}
{"foo3":"bar3", "lorem": [1,2,3]}
`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
      { foo2: 'bar2' },
      { foo3: 'bar3', lorem: [1, 2, 3] },
    ]);
  });

  it('omits white spaces', () => {
    const lines = `{"foo":"bar"}
{"foo2":"bar2"}

{"foo3":"bar3",\t"lorem": [1,2,3]}



`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
      { foo2: 'bar2' },
      { foo3: 'bar3', lorem: [1, 2, 3] },
    ]);
  });

  it('returns empty array for one invalid JSON line', () => {
    const lines = 'foo';

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([]);
  });

  it('returns empty array for two invalid JSON lines', () => {
    const lines = `foo
bar`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([]);
  });

  it('returns a one-element array for a one-line string followed by one invalid JSON line', () => {
    const lines = `{"foo":"bar"}
baz`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
    ]);
  });

  it('returns a one-element array for a one-line string preceded by one invalid JSON line', () => {
    const lines = `baz
{"foo":"bar"}`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
    ]);
  });

  it('returns a one-element array for a one-line string preceded and followed by one invalid JSON line', () => {
    const lines = `baz
{"foo":"bar"}
baz2`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
    ]);
  });

  it('returns a two-element array for a two-line string having an invalid JSON line between', () => {
    const lines = `{"foo":"bar"}
baz
{"foo2":"bar2"}
`;

    const result = readJsonLines(lines);

    expect(result).to.deep.equal([
      { foo: 'bar' },
      { foo2: 'bar2' },
    ]);
  });
});
