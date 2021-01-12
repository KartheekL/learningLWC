import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
	data = [];
	info = {};
	@api
	get selectedRows() {
		return [];
	}
	set selectedRows(values) {
		this.info.selectedRows = values;
		this.selectRows(values);
	}
	@api
	get rows() {
		return [];
	}
	set rows(values) {
		this.info.totalRows = values;
		this.createData(values);
	}
	createData(values) {
		values.forEach((element) => {
			this.data.push({
				id: element,
				value: element,
				status: "slds-text-body_small"
			});
		});
	}
	selectRows(values) {
		values.forEach((element) => {
			this.data[element - 1].status = "slds-text-heading_large";
		});
	}
}
