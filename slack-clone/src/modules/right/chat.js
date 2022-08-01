
import { Routes, Route, useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import ChatDetail from './chatDetail.js';

//Chat is a component that will be rendered in the right
function Chat(props) {
    const { type, id } = useParams();

    return (
        <div>
            <ChatDetail id={id} type={type}/>
        </div>
    );
}

export default Chat;
