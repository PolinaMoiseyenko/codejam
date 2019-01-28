import $ from 'jquery';

import headerRender from './header.template';
import scrollTo from '../../utils/scrollTo';
import './header.scss';
import data from '../../data/interface/translation.json';
import './index.scss';

$('header').append(headerRender());

scrollTo('.about-us', '.footer-area');
