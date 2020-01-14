import './inner.scss';
import { LightningElement, track } from 'lwc';


export default class Inner extends LightningElement {

    connectedCallback() {
        console.log('Inner connectedCallback');
    }
}
