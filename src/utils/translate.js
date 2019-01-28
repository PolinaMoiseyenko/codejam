import data from '../data/interface/translation.json';

export const getLanguage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const currentLang = urlParams.get('lang');
  if (!currentLang) {
    return 'ru';
  }
  return currentLang;
};

export default function (key) {
  const lang = getLanguage();
  if (data[0][key] && data[0][key][lang]) {
    return data[0][key][lang];
  }
  return key;
}
