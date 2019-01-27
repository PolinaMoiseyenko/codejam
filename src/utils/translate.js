import data from "./../data/interface/translation.json"

export default function(key) {
	let lang = getLanguage();
	if (!lang) {
		lang = "ru";
	}
	if (data[0][key] && data[0][key][lang]) {
		return data[0][key][lang];
	} 
	return key;
}

export const getLanguage = () => {
	const urlParams = new URLSearchParams(window.location.search);
 	const currentLang = urlParams.get('lang');
 	return currentLang;
}
