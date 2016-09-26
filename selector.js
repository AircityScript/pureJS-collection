function getById(element){
		return document.getElementById(element);
}

function getByTag(element){
		return document.getElementsByTagName(element)[0];
}

function $(selector, context){
		context = context || document;
		return context.querySelector(selector);
}

function $$(selector, context){
		context = context || document;
		return context.querySelectorAll(selector);
}