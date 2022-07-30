// reducer.js
const INITIAL_STATE = {
	channels: [],
	chats: []

}

export default (state = INITIAL_STATE, action = {}) => {
	switch (action.type) {
		case "UPDATE_CHANNELS":
			return {
				...state,
				channels: action.payload
			};
		case "UPDATE_CHATS":
			return {
				...state,
				chats: action.payload
			};
		case "SET_DATA":
			// debug log data
			// console.log("reducer data: ", action.content);

			return {
				...state,
				...action.content
			};
		default:
			return state;
	}
};