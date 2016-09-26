function getWindowWidth(){
		return  'innerWidth' in window ? window.innerWidth : document.documentElement.offsetWidth;
}

function getWindowHeight(){
		return  'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
}