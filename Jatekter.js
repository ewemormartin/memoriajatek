import kartya from "./Kartya.js";

$(function () {
  let szuloElem = $(".tarolo");

  for (let index = 0; index < LISTA.length; index++) {
    var kepINdex = LISTA[index][20];
    let k1 = new kartya(LISTA[index], kepINdex, szuloElem);
  }
});
class JatekTer {
    #id
    #kartyalista
    constructor(kartyalista){
        this.kartyalista=kartyalista
    }
  kattint() {
    let self = this;
    let id = this.#id;
    this.elem.on("click", function () {
      KIVALASZTL.push(id);
      console.log(id);

      if (KIVALASZTL.length == 2) {
        console.log(KIVALASZTL);
      }

      self.fordit(self.#kep);
      setTimeout(function () {
        self.visszafordit();
      }, 300);
      self.kivalasztas();
      if (this.kapcs) {
        self.kivalasztas();
      }
    });
  }

  fordit(kep) {
    this.elem.find("img").attr("src", kep);
  }
  visszafordit() {
    this.elem.find("img").attr("src", "./kepek/hatter.jpg");
  }
  kivalasztas() {
    if (KIVALASZTL.length == 2) {
      console.log("k1: ", KIVALASZTL[1]);
      console.log("k2: ", KIVALASZTL[0]);
      console.log("teljes: ", KIVALASZTL);

      if (KIVALASZTL[1] === KIVALASZTL[0]) {
        this.elem.find(`img#${KIVALASZTL[1]}`).css("visibility", "hidden");
        this.elem.find(`img#${KIVALASZTL[0]}`).css("visibility", "hidden");
      } else {
        this.visszafordit();
      }
      KIVALASZTL = [];
    }
  }
}
export default JatekTer;
