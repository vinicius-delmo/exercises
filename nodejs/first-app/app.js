import { EventEmitter } from 'node:events';

const emitter = new EventEmitter();

emitter.on('messageLogged', function () {
  console.log('Listened called');
});
emitter.emit('messageLogged');
