let KIVALASZTL = [];
export class kartya {
  #kep;
  #id;
  constructor(kep, id, szuloElem) {
    this.#kep = kep;
    this.#id = id;
    this.szuloElem = szuloElem.append(
      `<div class="kepek"><img src="./kepek/hatter.jpg" alt="" id="${
        this.#id
      }"></div>`
    );
    this.kapcsolo = true;
    this.elem = $(".kepek:last-child");
    this.kattint();
  }
}

export default kartya;
