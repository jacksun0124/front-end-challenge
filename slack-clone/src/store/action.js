import data from "../service/getData";

const setData = (content) => {
	return {
		type: "SET_DATA",
		content
	}
}

const appendData = (obj) => {
	return (dispatch) => {
		//add data to store
		dispatch(setData(obj));
	}
}

const asyncLoadData = () => {
	return (dispatch) => {
		setTimeout(() => {
			// async load data
			data.getData().then((data) => {
				//debug log data
				console.log("data: ", data);

				let obj = {
					channels: data.channel,
					chats: data.chat
				}

				//send data to reducer
				dispatch(setData(obj));
			}).catch((err) => {
				// handle error
				console.log(err);
			})
			
		}, 300);

	}
}

export {
	appendData,
	asyncLoadData
}