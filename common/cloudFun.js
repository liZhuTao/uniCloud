let getData = function(list) {
	let mylist = list
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
				name: 'getData',
				data: {
					"list": mylist
				}
			})
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}


let getGoods = function(list,pageid) {
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
				name: 'getGoods',
				data: {
					"list": list,
					"pageid":pageid
				}
			})
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}



export { getData,getGoods }
