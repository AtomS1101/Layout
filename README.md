# Layout

### version : 1.0

```js
new Layout();
```

___

## Properties
#### ` table`: UITable
Set a UITable you want to add Row.
#### ` style`: object
Set styles and items. Refer to the example below.
#### ` event`: object
Set a function to be executed when the id specified in the style is called.

___
## Method
#### ` ApplyStyles()`
Apply styles to UITableRow. The keys of the dictionary given to style are sorted according to the numbers appearing from the fourth character onward, appended after content identifier. This helps simplify your code if you want to add or change content to the left side of the row after already adding something.

___
## format

#### Row setting:  `body`
|  properties  | type  |
|  --- | --- |
|  `background`  |  Color  |
|  `onSelect`  |  object |
|  `height`  |  number  |
|  `spacer`  |  number  |

> #### onSelect

|  properties  |  type |
|  --- | --- |
|  `select`  |  bool |
|  `dismiss`  |  bool |
|  `id`  |  String |

#### text:  `txt#`
|  properties  | format  |  type  |
|  --- | --- | --- |
|  `text`  |  [title, subtitle] |  String  |
|  `color`  | [title, subtitle]  |  Color  |
|  `font`  | [title, subtitle]  |  Font  |

#### button:  `btn#`
|  properties  | type  |
|  --- | --- |
|  `title`  |  String |
|  `id`  | String  |

#### image:  `img#`
|  properties  | type  |
|  --- | --- |
|  ` image`  |  Image |
|  `url`  | String  |

___
## Example
```js
const layout = new Layout(table);
layout.style = {
	body: { height : 100 },
	txt2: {
		text: ["title", "subtitle"],
		color: [new Color("#hex"), new Color("#hex")]
	}
}
layout.style.btn1 = {
	title: "click!",
	id: "ButtonAction"
}
layout.event = {
	ButtonAction: () => {}
}
layout.ApplyStyles();
```
In this example, btn1 is placed to the left of txt2 based on the key number, even though txt2 defined before btn1 defined.

___
## source code
[Click to Download](https://github.com/AtomS1101/Layout/blob/main/Layout.js)
