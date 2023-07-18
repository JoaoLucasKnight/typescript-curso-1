import { Negociacao } from "./models/negocicao.js";

const nego = new Negociacao (new Date(), 10, 100);
console.log(nego.volume)