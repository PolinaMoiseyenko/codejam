import $ from 'jquery';
import authorRender from './author-of-day.template';
import data from '../../data/ru.json';
import dataEng from '../../data/eng.json';
import dataBy from '../../data/by.json';
import './index.scss';

if ($('.content-person').length >= 0 ) {
  const container = $('.random-wrapper');
  container.empty();
  const date = new Date();
  const currentId = date.getDate() % data.length;

  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');

  let title = 'Фотограф дня';
  switch (lang) {
    case 'en':
      title = 'Author of the Day';
      container.append(authorRender(dataEng.find(person => person.id == currentId)));
      break;
    case 'by':
      title = 'Аўтар гэтага дня';
      container.append(authorRender(dataBy.find(person => person.id == currentId)));
      break;
    default:
      container.append(authorRender(data.find(person => person.id == currentId)));
  }

$('.random-title-author').text(title);
}
