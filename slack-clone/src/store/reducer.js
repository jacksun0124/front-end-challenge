import { createReducer } from '@reduxjs/toolkit'
import { Map } from 'immutable';

const INITIAL_STATE = {
	channels: [],
	chats: []

}

const reducer = createReducer(INITIAL_STATE, {
	REMOVE_CHAT: (state, action) => {
		//remove chat data from store
		console.log("action: ", action);
		action.type === "chat"?
		state.chats[action.id].chatlog = [...state.chats[action.id].chatlog.filter(item => item['message_id'] != action.index)]:
		state.channels[action.id].chatlog = [...state.channels[action.id].chatlog.filter(item => item['message_id'] != action.index)];
	},
	UPDATE_CHAT: (state, action) => {
		//insert chat data to store
		// console.log("action: ", action);
		action.content.type === 'chat'?
		state.chats[action.content.mid].chatlog = [...state.chats[action.content.mid].chatlog, action.content.content]:
		state.channels[action.content.mid].chatlog = [...state.channels[action.content.mid].chatlog, action.content.content];
	},
	SET_DATA: (state, action) => {
		//set data to store
		state.channels = action.content.channels;
		state.chats = action.content.chats;
	},
	default: (state) => {
		return state;
	}

})

export default reducer;