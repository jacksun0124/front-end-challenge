import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Chat from './chat.js';
import Tester from '../tester.js';

class Right extends React.Component {
    //use constructor to get the props
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Tester />} />
                    <Route exact path="/:type/:id" element={<Chat />} />
                </Routes>
            </div>
        );
    }
}

export default Right;