import { handleStatus, log } from "./utils/promises-helpers.js";

document.querySelector("#myButton").onclick = () => {
	fetch("/notas")
		.then(handleStatus)
		.then(notas => notas.reduce((array, nota) => array.concat(nota.itens), []))
		.then(log)
		.then(itens => itens.filter(item => item.codigo == "2143"))
		.then(itens => itens.reduce((total, item) => total + item.valor, 0))
		.then(log)	
		.catch(err => console.log(err));
}