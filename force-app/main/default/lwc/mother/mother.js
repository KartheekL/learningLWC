import { LightningElement } from "lwc";

export default class Mother extends LightningElement {
	customMethod(event) {
		event.preventDefault();
		this.dispatchEvent(new CustomEvent("butter"));
	}
}
