import $ from 'jquery';
import renderSearchResult from './../search/render-search-result';
import noResults from '../search/no-results.template';
import interfaceNoResult from '../../data/interface/translation.json';
import './index.scss';

if ($('.photographs').length > 0) {
  const container = $('.photographs-list');
  const searchLine = $('.search-input');
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  const langNoResult = interfaceNoResult[0].noResults;
  const langPlaceholder = interfaceNoResult[0].searchCase;

  searchLine.on('keyup', (event) => {
    container.empty();
    renderSearchResult(lang, container, event.target.value);
    if (!container[0].children.length) {
      switch (lang) {
        case 'en':
          container.append(noResults(langNoResult.en));
          break;
        case 'by':
          container.append(noResults(langNoResult.by));
          break;
        default:
          container.append(noResults(langNoResult.ru));
      }
    }
  });
  switch (lang) {
    case 'en':
      searchLine[0].placeholder = langPlaceholder.en;
      break;
    case 'by':
      searchLine[0].placeholder = langPlaceholder.by;
      break;
    default:
      searchLine[0].placeholder = langPlaceholder.ru;
  }

  renderSearchResult(lang, container, '');
}
