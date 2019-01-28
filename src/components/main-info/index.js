import $ from 'jquery';

import mainInfoRender from './main-info.template';
import data from '../../data/interface/translation.json';
import './index.scss';

$('.main-info').append(mainInfoRender());