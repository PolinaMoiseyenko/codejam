import $ from 'jquery';

import personRender from './person.template';
import data from '../../data/ru.json';
import dataEng from '../../data/eng.json';
import dataBy from '../../data/by.json';
import loadOverlay from '../overlay/index';
import mapbox from '../leaflet/index';
import galleryRender from '../gallery';

const render = () => {
  if ($('.content-person').length > 0) {
    const container = $('.content-person');
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = urlParams.get('id');

    const lang = urlParams.get('lang');

    switch (lang) {
      case 'en':
        container.append(personRender(dataEng.find(person => person.id == currentId)));
        break;
      case 'by':
        container.append(personRender(dataBy.find(person => person.id == currentId)));
        break;
      default:
        container.append(personRender(data.find(person => person.id == currentId)));
    }
    container.append(galleryRender(data.find(person => person.id == currentId)))
  }
};


const checkVideoData = () => {
  const containerVideo = $('.content-person-video');
  if ($(containerVideo).attr('data-url') == '') {
    containerVideo.hide();
  }
};


const init = async () => {
  await render();
  await checkVideoData();
  loadOverlay();
  mapbox();
};

init();
