//your JS code here. If required.
function filterOdd(arr){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arr.filter(x => x % 2 === 0))
		}, 1000)	
	})
}

function multiplay(ar){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(ar.map(x => x*2));
		}, 2000)
	})
}

const div = document.getElementById("output");
const input = [1, 2, 3, 4];
(async function() {
	try{
		const filtered = await filterOdd(input)
		div.innerHTML = filtered.join(",");

		const mult = await multiplay(filtered);
		div.innerHTML = mult.join(",");
	}catch(e){
		console.log(e)
	}
})()
