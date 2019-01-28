import $ from 'jquery';

import headerRender from './header.template';
import scrollTo from '../../utils/scrollTo';

$('header').append(headerRender());

scrollTo('.about-us', '.footer-area');
