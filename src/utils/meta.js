const metaData = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');

  switch (lang) {
    case 'en':
      document.documentElement.lang = 'en-US';
      break;
    case 'by':
      document.documentElement.lang = 'by';
      break;
    default:
      document.documentElement.lang = 'ru';
  }
};


window.onload = () => {
  metaData();
};
