class App {
  constructor(app){
    this.app = app;
  }
}

let Facebook = new App("Facebook");

document.open();
document.write(`<h1>Nous n'aimons pas ${Facebook.app}!</h1>`);
document.close();
