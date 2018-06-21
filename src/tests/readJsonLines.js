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
});
