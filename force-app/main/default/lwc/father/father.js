import { LightningElement } from "lwc";

export default class Father extends LightningElement {
	handler(event) {
		console.log(event.target);
		console.log(event.detail);
	}
}
