import $ from 'jquery';
import footerRender from './footer.template';
import data from '../../data/interface/translation.json';
import './index.scss';

$('footer').append(footerRender());