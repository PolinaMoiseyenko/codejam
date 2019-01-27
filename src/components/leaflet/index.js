import $ from 'jquery';
import './index.scss';
import template from './index.template';
import data from '../../data/ru.json';


const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const render = () => {
  const mapbox = template;
  $('.geo-row').append(mapbox);
};


let targetPerson = null;
const getPerson = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const currentId = urlParams.get('id');

  targetPerson = data.find(person => person.id == currentId);

  return targetPerson;
};

getPerson();

mapboxgl.accessToken = 'pk.eyJ1Ijoic2lhcm9oaW4iLCJhIjoiY2pyZGVld2V1MW5iZjQ1cG5zcGl3NmppciJ9.cvrpAFaoU6V389qbey-cQg';

let map = null;
const createMap = () => {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 12,
    center: targetPerson.geo,
  });

  map.on('load', () => {
    const control = new mapboxgl.NavigationControl();
    map.addControl(control, 'top-left');

    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(targetPerson.geo)
      .setHTML(
        `<article class="marker-name">
          <h2>${targetPerson.name}</h2>
          <date>родился ${targetPerson.biography[0].date}</date>
          <p>родной город &ndash; ${targetPerson.geoname}</p>
        </article>`,
      ).addTo(map);
  });

  return map;
};

const init = async () => {
  await render();
  await getPerson();
  await createMap();
};

export default init;
