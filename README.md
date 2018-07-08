# chai-parse-as-json

`parse-as-json` is a simple assertion plugin for Chai that allows one to assert
a string to be valid JSON and then chain assertions about the parsed value.

The purpose is to replace clumsy assertions such as:

    expect(JSON.parse(response.payload)).to.deep.equal({msg: 'Hello'})

with more expressive:

    expect(response).property('payload').to.parse.as.json.and.to.deep.equal({msg: 'Hello'})

## Usage

Just `chai.use` the plugin and you're set:

    chai.use(require('chai-parse-as-json'))
