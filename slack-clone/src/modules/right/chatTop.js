import React from "react";
import { useState, useEffect } from "react";

const ChatTop = (props) => {
    const [name, setName] = useState("");

    useEffect(() => {
        setName(props.name);
    }, [props.name]);

    return (
        <div className="chat-top">
            <h1>{name}</h1>
        </div>
    );
}

export default ChatTop;