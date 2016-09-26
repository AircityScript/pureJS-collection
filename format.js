function formatDate(data) {
	let arr = data.split(" ");
	let date = new Date(arr[0].replace(/-/g, "/"));
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	let time = year + '年' + month + '月' + day + '日';	
	return (time + " " + arr[1]);
}

function formatDate(data) {
	let date = new Date(data.replace(/-/g, "/"));
	
	let currentMonth = date.getMonth() + 1 + "";
	currentMonth = '00'.substr(0, 2 - currentMonth.length) + currentMonth;

	let currentDate = date.getDate() + "";
	currentDate = '00'.substr(0, 2 - currentDate.length) + currentDate;

	return "" + date.getFullYear() + currentMonth + currentDate;
}