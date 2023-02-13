const assert = require('assert');
const fetch = require('node-fetch');
const card = require('../cards')

describe('External API Test', function() {
  it('should return expected JSON from external API', async function() {
    const expectedJson = JSON.parse( JSON.stringify(card));
 
    const response = await fetch('https://mockit.herokuapp.com/Cards', { signal: AbortSignal.timeout(5000) });
    const jsonResponse = await response.json();
    
    console.log('expectedJson: ', expectedJson );
 
       for (const field in jsonResponse) {
        console.log('field: ', field );
        if (!expectedJson.hasOwnProperty(field)) {
          assert(false)
        }
      }
      assert(true);
  });
  
});