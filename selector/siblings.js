function getAllSiblings(n) {
		return getChildren(n.parentNode.firstChild, n);
}