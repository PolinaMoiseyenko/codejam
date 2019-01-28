import './index.scss';
import template from './gallery.template';
import data from '../../data/ru.json';

const draw = () => {
  const container = document.querySelector('.gallery-row');
  if (container !== null) {
    container.innerHTML = template;
  }
};


const getPerson = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const currentId = urlParams.get('id');
  return data.find(person => person.id == currentId);
};


function photoRender() {
  const targetPerson = getPerson();

  if (targetPerson !== undefined) {
    const gallerySize = targetPerson.gallery;
    const src = targetPerson.photo.slice(0, targetPerson.photo.length - 8);

    const wrapper = document.querySelector('.carousel-inner');

    for (let i = 1; i <= gallerySize; i += 1) {
      const link = `${src + i}.jpg`;
      const photo = document.createElement('div');

      if (i === 1) {
        photo.className = 'carousel-item active';
      } else {
        photo.className = 'carousel-item';
      }

      photo.innerHTML = `<img class="d-block w-100 gallery-photo" src=${link} alt="">`;
      wrapper.append(photo);
    }
  }
}

export default () => {
  draw();
  photoRender();
};
