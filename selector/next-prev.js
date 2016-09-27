function next(element){
		var nextSibling = element.nextSibling;

		while(nextSibling && nextSibling.nodeType != 1) {
				nextSibling = nextSibling.nextSibling;
		}

		return nextSibling;
}

function prev(element){
		var prevSibling = element.previousSibling;

		while(prevSibling && prevSibling.nodeType != 1) {
				prevSibling = prevSibling.previousSibling;
		}

		return prevSibling;
}