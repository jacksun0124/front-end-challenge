import data from "../service/getData";

const setData = (content) => {
	return {
		type: "SET_DATA",
		content
	}
}

const addChatMsg = (content) => {
	return {
		type: "UPDATE_CHAT",
		content
	}
}

const removeChatMsg = (id, index, type) => {
	return {
		type: "REMOVE_CHAT",
		id, index
	}
}


const appendChatData = (obj) => {
	return (dispatch) => {
		//add chat data to store
		dispatch(addChatMsg(obj));
	}
}

const removeChatData = (id, index, type) => {
	return (dispatch) => {
		//remove chat data from store
		dispatch(removeChatMsg(id, index, type));
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
				// console.log("data: ", data);

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
	appendChatData,
	removeChatData,
	asyncLoadData
}