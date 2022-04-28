import { aRecibos } from "../models/recibos.js";

const recibosMethods = {
  showForEach() {
    aRecibos.forEach((recibo) => {
      console.log(`Cliente: ${recibo.cliente}, Importe: ${recibo.importe}`);
    });
  },
  sortRecibos() {
    aRecibos.sort((r1, r2) => r1.importe - r2.importe);
    console.log(aRecibos);
  },
  filterByR() {
    const newRecibos = aRecibos.filter((c) => c.cliente[0] === "R");
    console.log(newRecibos);
  },
  amountIncreased() {
    const importeIncreased = aRecibos.map((r) => {
      return { ...r, importe: r.importe * 1.3 };
    });
    console.log(importeIncreased);
  },
};

export { recibosMethods };
