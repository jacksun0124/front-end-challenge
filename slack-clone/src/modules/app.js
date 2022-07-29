import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import '../css/main.scss';
import Left from './left/left.js';
import Right from './right/right.js';
import Tester from './tester.js';


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='top'></div>
                <div className='main'>
                    <div className='left'>
                        <Left />
                    </div>
                    <div className='right'>
                        <Right />
                    </div>
                </div>

            </div>
        );
    }
}

export default App;


