function clone(obj) {
		if (null === obj || 'object' !== typeof obj){
				return obj;
		}
		var copy = obj.constructor();

		for (var attr in obj) {
				if (obj.hasOwnProperty(attr)){
						copy[attr] = obj[attr];
				}
		}
		return copy;
}
//or
function clone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    var cloned = {}
    var keys = Object.keys(obj)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      cloned[key] = deepClone(obj[key])
    }
    return cloned
  } else {
    return obj
  }
}
