import $ from 'jquery';

import headerRender from './header.template';
import scrollTo from '../../utils/scrollTo';
import data from '../../data/interface/translation.json';

$('header').append(headerRender());

scrollTo('.about-us', '.footer-area');
