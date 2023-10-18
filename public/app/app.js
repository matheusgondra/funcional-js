import { log } from "./utils/promises-helpers.js";
import "./utils/array-helpers.js";
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime } from "./utils/operators.js";

const action = debounceTime(500, takeUntil(3, () => 
	service
		.sumItems("2143")
		.then(log)
		.catch(err => console.log(err))
));

document.querySelector("#myButton").onclick = action;