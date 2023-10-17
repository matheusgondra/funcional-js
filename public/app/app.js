import { handleStatus, log } from "./utils/promises-helpers.js";
import "./utils/array-helpers.js";

document.querySelector("#myButton").onclick = () => {
	fetch("/notas")
		.then(handleStatus)
		.then(notas => notas
			.$flatMap(nota => nota.itens)
			.filter(item => item.codigo == "2143")
			.reduce((total, item) => total + item.valor, 0)
		)
		.catch(err => console.log(err));
}