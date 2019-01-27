import personRender from './person.template';
import data from './../../data/ru.json'
import $ from 'jquery';

if ( $('.content-person').length > 0 ) {
  const container = $('.content-person');
  const urlParams = new URLSearchParams(window.location.search);
  const currentId = urlParams.get('id');
  container.append(personRender(data.find(person => person.id == currentId)));

}
