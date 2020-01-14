import './app.scss';
import { LightningElement, track } from 'lwc';


export default class App extends LightningElement {

    connectedCallback() {
        console.log('App connectedCallback');
    }
}
