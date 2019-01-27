import './index.scss';
import template from './gallery.template';

import $ from 'jquery';

function photoRender(src, gallerySize, wrapper) {
  for (let i = 1; i <= gallerySize; i++) {    
    const link = src + i + '.jpg';
    const photo = document.createElement('div');
    if (i === 1) {
      photo.className = 'carousel-item active';
    } else photo.className = 'carousel-item';
    photo.innerHTML = `<img class="d-block w-100 gallery-photo" src=${link} alt="Gallery photo">`;
    wrapper.append(photo);
  }
};

export default function galleryRender(person) {
  const gallerySize = person.gallery;
  const src = person.photo.slice(0, person.photo.length - 8);
  const container = document.querySelector('.gallery-row');
  container.innerHTML = template;
  const wrapper = document.querySelector('.carousel-inner');
  photoRender(src, gallerySize, wrapper);
}

