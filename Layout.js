class Layout {
	constructor(table, style = {}, event = {}) {
		this.table = table; this.style = style; this.event = event;
	}
	ApplyStyles() {
		let Style = this.style;
		const Row = new UITableRow();
		if (Style.body.background) Row.backgroundColor = Style.body.background;
		if (Style.body.height) Row.height = Style.body.height;
		if (Style.body.spacer) Row.cellSpacing = Style.body.spacer;
		if (Style.body.onSelect && Style.body.onSelect.select) {
			Row.onSelect = this.event[Style.body.onSelect.id];
			Row.dismissOnSelect = Style.body.onSelect.dismiss;
		}
		let Sorted = Object.keys(Style).sort((a, b) => {
			const NumA = parseInt(a.slice(3), 10);
			const NumB = parseInt(b.slice(3), 10);
			return NumA - NumB;
		});
		Style = Object.fromEntries(Sorted.map(key => [key, Style[key]]));
		for (let [item, value] of Object.entries(Style)) {
			let Content;
			switch (item.slice(0, 3)) {
				case "txt": Content = Row.addText(value.text[0], value.text[1]);break;
				case "btn": Content = Row.addButton(value.title);break;
				case "img":
					if (value.url) Content = Row.addImageAtURL(value.url);
					if (value.image) Content = Row.addImage(value.image);break;
			}
			if (value.color) {Content.titleColor = value.color[0];Content.subtitleColor = value.color[1];}
			if (value.font) {Content.titleFont = value.font[0];Content.subtitleFont = value.font[1];}
			if (value.id) Content.onTap = this.event[value.id];
			if (value.dismiss) Content.dismissOnTap = value.dismiss;
			if (value.widthWeight) Content.widthWeight = value.widthWeight;
			if (value.align) {
				switch (value.align) {
					case "right": Content.rightAligned();break;
					case "left": Content.leftAligned();break;
					case "center": Content.centerAligned();break;
				}
			}
		}
		this.table.addRow(Row);
	}
}
