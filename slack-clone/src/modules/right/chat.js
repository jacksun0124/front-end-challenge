// import { Routes, Route, useParams, useMatch } from "react-router-dom";
// import React from 'react';
// import ChatDetail from './chatDetail.js';

// class Chat extends React.Component {
    
//     constructor(props) {
//         super(props);

//         const location = window.location.href;
//         const type = location.split("/")[location.split("/").length - 2];
//         const id = location.split("/")[location.split("/").length - 1];

//         console.log("type: ", type);
//         console.log("id: ", id);
//         this.state = {
//             id: id,
//             type: type,
//         }; 
//     }

//     componentWillMount() {
//         this.unlisten = this.props.history.listen((location, action) => {
//           console.log("on route change");
//         });
//       }
//       componentWillUnmount() {
//         this.unlisten();
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.id}
//                 <ChatDetail id={this.state.id} type={this.state.type}/>
//             </div>
//         );
//     }
// }

// export default Chat;



import { Routes, Route, useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import ChatDetail from './chatDetail.js';

function Chat(props) {
    const { type, id } = useParams();

    return (
        <div>
            <ChatDetail id={id} type={type}/>
        </div>
    );
}

export default Chat;
