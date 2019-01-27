import $ from 'jquery';

import personRender from './person.template';
import data from '../../data/ru.json';
import loadOverlay from '../overlay/index';
import mapbox from '../leaflet/index';
import galleryRender from '../gallery';

const render = () => {
  if ($('.content-person').length > 0) {
    const container = $('.content-person');
    const urlParams = new URLSearchParams(window.location.search);
    const currentId = urlParams.get('id');
    container.append(personRender(data.find(person => person.id == currentId)));
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
