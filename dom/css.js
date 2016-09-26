function css( el, props ) {
		var key;
		for ( key in props ) {
				if ( props.hasOwnProperty(key) ) {
						if ( key !== null ) {
								el.style[key] = props[key];
						}
				}
		}
		return el;
}

function setCss(element, style, value){
		element.style[style] = value;
}
