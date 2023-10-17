export const handleStatus = res => {
	return res.ok ? res.json() : Promise.reject(res.statusText);
}