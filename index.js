const protobuf = require('protocol-buffers');
// const protoMessages = require('./protoBuffers/messages');
const fs = require('fs');

const protoMessages = protobuf(fs.readFileSync('./protoBuffers/test.proto'))

const buf = protoMessages.Test.encode({
  num: 5,
  payload: 'hello world'
});

console.log('encoded', buf);

const obj = protoMessages.Test.decode(buf);

console.log('decoded', obj);
