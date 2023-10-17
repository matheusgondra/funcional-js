import { handleStatus, log } from "./utils/promises-helpers.js";
import "./utils/array-helpers.js";

const sumItems = code => notas => notas
	.$flatMap(nota => nota.itens)
	.filter(item => item.codigo == code)
	.reduce((total, item) => total + item.valor, 0);

document.querySelector("#myButton").onclick = () => {
	fetch("/notas")
		.then(handleStatus)
		.then(sumItems("2143"))
		.then(log)
		.catch(err => console.log(err));
}