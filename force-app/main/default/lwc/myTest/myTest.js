import { LightningElement, api, track } from "lwc";
export default class MyTest extends LightningElement {
	privateTitle;
	@api
	get title() {
		return this.privateTitle;
	}

	set title(value) {
		this.privateTitle = value.toUpperCase();
		this.setAttribute("title", this.privateTitle);
	}

	dataArray = [
		{
			key: 1,
			value: "a"
		},
		{
			key: 2,
			value: "b"
		}
	];

	dataUpdate() {
		this.dataArray[1].key = 3;
		this.dataArray[1].value = "c";
		console.log(this.dataArray);
	}
}
