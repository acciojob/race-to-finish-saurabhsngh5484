window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

let output = document.getElementById('output');

function promise1(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 1');
		}, Math.floor(Math.random() * 5 + 1) * 1000);
	});
}

function promise2(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 2');
		}, Math.floor(Math.random() * 5 + 1) * 1000);
	});
}

function promise3(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 3');
		}, Math.floor(Math.random() * 5 + 1) * 1000);
	});
}

function promise4(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 4');
		}, Math.floor(Math.random() * 5 + 1) * 1000);
	});
}

function promise5(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Promise 5');
		}, Math.floor(Math.random() * 5 + 1) * 1000);
	});
}

promises.push(promise1);
promises.push(promise2);
promises.push(promise3);
promises.push(promise4);
promises.push(promise5);


Promise.any(promises).then((value) => {
	output.innerHTML = value;
});