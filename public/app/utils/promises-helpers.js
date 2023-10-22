export const handleStatus = res => {
	return res.ok ? res.json() : Promise.reject(res.statusText);
}

export const log = param => {
	console.log(param);
	return param;
}

export const timeoutPromise = (miliseconds, promise) => {
	const timeout = new Promise((resolve, reject) => 
		setTimeout(() => reject(`Limite da promise excedido (limite: ${miliseconds} ms)`), miliseconds));
	
	return Promise.race([timeout, promise]);
}