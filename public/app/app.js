import { delay, log, retry, timeoutPromise } from "./utils/promises-helpers.js";
import "./utils/array-helpers.js";
import { notasService as service } from "./nota/service.js";
import { takeUntil, debounceTime, partialize, pipe } from "./utils/operators.js";
import { EventEmitter } from "./utils/event-emitter.js";
import { Maybe } from "./utils/maybe.js";

const maybe = Maybe.of(null)
	.map(value => value + 10)
	.map(value => value + 30)
	.getOrElse(0);

alert(maybe)

const operations = pipe(
	partialize(takeUntil, 3),
	partialize(debounceTime, 500)
);

const action = operations(() => 
	retry(3, 3000, () => timeoutPromise(200, service.sumItems("2143")))
		.then(delay(5000))
		.then(total => EventEmitter.emit("itensTotalizados", total))
		.catch(err => console.log(err))
);

document.querySelector("#myButton").onclick = action;