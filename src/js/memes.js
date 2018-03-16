import './general';
console.log('memes.js loaded');

const deviceWidth = window.innerWidth;

class Memes {
  constructor() {
    this.$canvas = document.querySelector('#imgCanvas');
    this.$topTextInput = document.querySelector('#topText');
    this.$bottomTextInput = document.querySelector('#bottomText');
    this.$imageInput = document.querySelector('#image');
    this.$downloadButton = document.querySelector('#downloadMeme');
    this.addEventListeners();
  }

  createCanvas() {
    let canvasHeight = Math.min(480, deviceWidth - 30);
    let canvasWidth = Math.min(680, deviceWidth - 30);
    this.$canvas.height = canvasHeight;
    this.$canvas.width = canvasWidth;
  };

  createMeme(e) {
    let context = this.$canvas.getContext('2d');

    if (this.$imageInput.files && this.$imageInput.files[0]) {
      let reader = new FileReader();

      reader.onload = () => {
        let image = new Image();

        image.onload = () => {
          this.$canvas.height = image.height;
          this.$canvas.width = image.width;
          context.clearRect(0, 0, this.$canvas.height, this.$canvas.width);
          context.drawImage(image,0,0);
        };

        image.src = reader.result;
      };

      reader.readAsDataURL(this.$imageInput.files[0]);
      console.log('this will get printed first');
    }
  };

  addEventListeners() {
    this.createMeme = this.createMeme.bind(this);
    let inputNodes = [this.$topTextInput, this.$bottomTextInput, this.$imageInput];
    inputNodes.forEach(element => element.addEventListener('keyup', this.createMeme));
    inputNodes.forEach(element => element.addEventListener('change', this.createMeme))
  };
}

new Memes();
