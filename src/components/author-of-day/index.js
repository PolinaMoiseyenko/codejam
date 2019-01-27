import authorRender from './author-of-day.template';
import data from '../../data/ru.json';
import $ from 'jquery';
import './index.scss';

if ($('.content-person').length >= 0 ) {
  const container = $('.random-wrapper');
  container.empty();
  const date = new Date();
  const currentId = date.getDate() % data.length;
  container.append(authorRender(data.find(person => person.id == currentId)));
}