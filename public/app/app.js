import { handleStatus } from "./utils/promises-helpers.js";

document.querySelector("#myButton").onclick = () => {
	fetch("/notas")
		.then(handleStatus)
		.then(notas => console.log(notas))
		.catch(err => console.log(err));
}