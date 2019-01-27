import listItemRender from './list-item.template';
import data from './../../data/ru.json'
import $ from 'jquery';

if ( $('.photographs').length > 0 ) {
  const container = $('.photographs-list');
	data.map(person => container.append(listItemRender(person)) );
}
