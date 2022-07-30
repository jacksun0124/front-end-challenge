import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import LeftContent from "./leftContent";

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className='left-box'>
                    <h1 className="left-title">Slack Clone</h1>
                </div>
                <div className='left-box'>
                    <LeftContent />
                </div>
            </div>
        );
    }
}

export default Left;