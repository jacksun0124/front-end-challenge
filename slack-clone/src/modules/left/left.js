import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Channels from "./channel";

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Slack Clone</h1>
                {/* <Link to="/chat/123">L 1</Link>
                <Link to="/chat/666">L 2</Link>
                <br></br>
                <button onClick={() => {}}>L 3</button> */}
                <Channels />
                
            </div>


        );
    }
}

export default Left;