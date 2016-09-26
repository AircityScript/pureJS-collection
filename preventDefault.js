function preventDefault(event){
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
}
