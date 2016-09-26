function hasClass(ele,className) {
		return !!ele.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
}
//or
function hasClass(className,node){
				let classNames = node.className.split(/\s+/);
				for(let i = 0; i < classNames.length; i++){
						if(classNames[i] == className){
								return true;
						}
				}
				return false;
} 	

function removeClass(element, className) {
		if (element && hasClass(element,className)) {
				var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
				element.className=element.className.replace(reg,'');
		}
}

function addClass(element, className) {
		if (element && !hasClass(element,className)) {
				element.className += ' '+className;
		}
}

