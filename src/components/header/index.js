import $ from 'jquery';

import headerRender from './header.template';
import data from '../../data/interface/translation.json';

$('header').append(headerRender());
