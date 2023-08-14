// const url = require("url");


class MarvelService {

	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=43a3491c0bd8892729bc304d7fef771b'
	getResource = async (url) => {
		let res = await fetch(url);

		if(!res.ok) {
			throw new Error(`Could not fetch ${url}, status ${res.status}`)
		}

		return await res.json();
	}

	getAllCharacters = () => {
		return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
	}
	getAllCharacter = (id) => {
		return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
	}
}


export default MarvelService
/*async function getResource(url) {
	let res = await fetch(url);

	if(!res.ok) {
		throw new Error(`Could not fetch ${url}, status ${res.status}`)
	}

	return await res.json();
}*/

