import './general';
console.log('memes.js loaded');

class Memes {
  constructor() {
    console.log('Inside Memes class constructor');
    console.log(ENVIRONMENT, CONSTANT_VALUE);
  }
}

new Memes();
