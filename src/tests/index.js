import expect from 'read-json-lines-sync/tests/expect';
import readJsonLines from 'read-json-lines-sync';

describe('index', () => {
  it('exports a function as default', () => {
    expect(readJsonLines).to.be.a('function');
  });
});
