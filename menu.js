/* menu v.1.0 */
class Model {
    constructor(data = {}) {
		    let {key, value,link,icon} = data;			
        Object.assign(this,{key, value,link,icon});		
    }		
}

import store from 'lib/vuex/store.js'

//比较系统列表与本地列表
const merger = (menu,system,condition ) => {
	if(typeof(condition) !== 'function') {
		condition = function(json) {
			return true
		}
	}
	//将本地数据存为map
	let map = new Map();
	let mapSet = (list) => {
			list.forEach(json => { 
				let model = new Model(json);	
				let key = model.value;		
				map.set(key,model);
				if( json.hasOwnProperty("child") ) {
					let list = json.child;
					mapSet(list)
				}
			});		
	};
	mapSet(menu);
	//侧边栏列表
	let list = [];
	//按钮
	let arr = [];
	system.forEach(json => {
		if(!condition(json)) {
			//按钮权限
			if(json.funcType==2) {
				arr.push(json.value)
			}
			return false
		}
		let key = json.value;
		if(map.has(key)) {
			list.push(Object.assign(json,map.get(key)))
		} else {
		  let {key, value} = json;	
			console.log('<==路由未设置==>');
			console.log({key, value});
			list.push(json);
		}
	})	
	return list;
}
export {merger as merger}

//将数组列表按类型保存
const sketch = (list) => {
	let root = [];
	let map =  new Map();
	list.forEach((json,index)=>{
		if(json.parent === "-") {
			root.push(json)
		} else {
			let key = json.parent;

			let arr = [];
			if(map.has(key)) {
				arr = map.get(key)			
			}  
			arr.push(json);
			map.set(key,arr);			
		}
	})
	let run = (root,map) => {
		list.forEach((json,index)=>{
			let key = json.value;
			if(map.has(key)) {
				let list =  map.get(key);			
				map.delete(key);
				json.child = list;				
				run(list,map);		
			}
		})
	}	
  run(list,map);
	return root;	
}
export {sketch as sketch}

const sidebar = (menu,system) => {
	let condition = (json) => {
		return (json.funcType == 0)?true:false;	
	}	
	let list = merger(menu,system,condition);
	/* 路由=> value parent 映射 */
	let state = {};
	list.filter(json => {
		return (json.link?true:false);
	}).forEach(json => {
	  let {link,key,value,parent} = json;
	  state[link]= {key,value,parent}
	})	
	
	return sketch(list)
}
export {sidebar as sidebar}
