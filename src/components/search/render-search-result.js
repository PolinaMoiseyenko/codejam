import listItemRender from '../all/list-item.template';
import search from './../../utils/search';
import data from '../../data/ru.json';
import dataEng from '../../data/eng.json';
import dataBy from '../../data/by.json';

function renderPerson(obj, container, query) {
  obj.map((person) => { // eslint-disable-line array-callback-return
    if (search(person, query)) {
      container.append(listItemRender(person));
    }
  });
}

export default function (lang, container, query) {
  switch (lang) {
    case 'en':
      renderPerson(dataEng, container, query);
      break;
    case 'by':
      renderPerson(dataBy, container, query);
      break;
    default:
      renderPerson(data, container, query);
  }
}
