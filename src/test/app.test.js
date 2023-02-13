const assert = require('assert');
const fetch = require('node-fetch');

describe('External API Test', function() {
  it('should return expected JSON from external API', async function() {
    const expectedJson = { foo: 'bar', baz: 42 };

    const response = await fetch('https://mockit.herokuapp.com/Cards');
    const jsonResponse = await response.json();

    assert.deepStrictEqual(jsonResponse, expectedJson);
  });
});