import $ from 'jquery';
import listItemRender from './list-item.template';
import data from '../../data/ru.json';
import dataEng from '../../data/eng.json';
import dataBy from '../../data/by.json';

if ($('.photographs').length > 0) {
  const container = $('.photographs-list');

  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');

  switch (lang) {
    case 'en':
      dataEng.map(person => container.append(listItemRender(person)));
      break;
    case 'by':
      dataBy.map(person => container.append(listItemRender(person)));
      break;
    default:
      data.map(person => container.append(listItemRender(person)));
  }
}
