const urlParams = new URLSearchParams(window.location.search);

const metaData = () => {
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

const pageTitle = () => {
  const title = document.querySelector('h1');
  const defaultTitle = document.querySelector('.logo-name');
  if (title) {
    document.title = title.innerText;
  } else {
    document.title = defaultTitle.innerText;
  }
};

export default () => {
  metaData();
  pageTitle();
};
