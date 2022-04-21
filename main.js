class Digits {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
    this.d1 = 0;
    this.d2 = 0;
    this.d1_old = 0;
    this.d2_old = 0;
  }

  setOld() {
    this.d1_old = this.d1;
    this.d2_old = this.d2;
  }

  init() {
    document.getElementById(this.name1).innerHTML = this.d1;
    document.getElementById(this.name2).innerHTML = this.d2;
  }

  update() {
    if (this.d1 != this.d1_old) {
        document.getElementById(this.name1 + "_old").innerHTML = this.d1_old;
        document.getElementById(this.name1).innerHTML = this.d1;
  
        document.getElementById(this.name1).classList.add("enter");
        setTimeout(() => {
          document.getElementById(this.name1).classList.remove("enter");
        }, 500);
  
        document.getElementById(this.name1 + "_old").classList.add("exit");
        setTimeout(() => {
          document.getElementById(this.name1 + "_old").classList.remove("exit");
        }, 500);
      }

    if (this.d2 != this.d2_old) {
      document.getElementById(this.name2 + "_old").innerHTML = this.d2_old;
      document.getElementById(this.name2).innerHTML = this.d2;

      document.getElementById(this.name2).classList.add("enter");
      setTimeout(() => {
        document.getElementById(this.name2).classList.remove("enter");
      }, 500);

      document.getElementById(this.name2 + "_old").classList.add("exit");
      setTimeout(() => {
        document.getElementById(this.name2 + "_old").classList.remove("exit");
      }, 500);
    }
  }
}

let h = new Digits("h1", "h2");
let m = new Digits("m1", "m2");
let s = new Digits("s1", "s2");

calc();
h.init();
m.init();
s.init();

setInterval(() => {
  h.setOld();
  m.setOld();
  s.setOld();

  calc();

  h.update();
  m.update();
  s.update();
  
}, 1000);

function calc() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  h.d1 = parseInt(hours / 10);
  h.d2 = hours % 10;
  m.d1 = parseInt(minutes / 10);
  m.d2 = minutes % 10;
  s.d1 = parseInt(seconds / 10);
  s.d2 = seconds % 10;
}
