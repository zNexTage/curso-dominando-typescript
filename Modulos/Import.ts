// import Matematica from "./Export";
const Matematica = require('./Export');
import mostrarMensagem from "./Funcoes/MostrarMensagem";

const m = new Matematica();

console.log(m.somar(10, 10));
mostrarMensagem('Alo Mundo');