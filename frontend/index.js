import './common/common.scss';
import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import App from 'c/app';

const appEl = createElement('c-app', { is: App });
document.body.appendChild(appEl);