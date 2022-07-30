// import { Routes, Route, useParams, useMatch } from "react-router-dom";
// import React from 'react';
// import equal from 'fast-deep-equal'

// // function Chat() {
// //     
// //     return (
// //         <div>
// //             <h1>chat page </h1>
// //             {id}
// //         </div>
// //     );
// // }


// class Chat extends React.Component {
    
//     constructor(props) {
//         super(props);

//         const location = window.location.href;
//         const id = location.split("/")[4];

//         console.log("location: ", location);
//         console.log("id: ", id);
//         // this.state = {
//         //     id: id
//         // }; 
//     }

//     componentDidMount() {
//         // console.log("Chat id: ", this.state.id);
//         // const { id } = useParams();
//         // const { id } = this.props.match;
//         // console.log("Chat id: ", useMatch());
//         // console.log("this.props: ", this.props);
//     }

//     componentDidUpdate(prevProps) {
//         //log prevProps
//         console.log("Chat componentDidUpdate");
//         console.log("prevProps: ", prevProps);
//         //log this.props
//         console.log("this.props: ", this.props);


//         // if(!equal(this.props.id, prevProps.id)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
//         // {
//         //  console.log("Chat componentDidUpdate");
//         // }
//       } 

//     render() {
//         return (
//             <div>
//                 <h1>Hello Chat</h1>
//                 {/* <p>id: {this.state.id}</p> */}
//             </div>
//         );
//     }
// }

// export default Chat;


// import { Routes, Route, useParams } from "react-router-dom";
// import React, {useState, useEffect} from 'react';
// import ChatDetail from './chatDetail.js';

// function Chat(props) {
//     const { type, id } = useParams();
    
//     console.log("useParams: ", useParams());

//     console.log("Chat props: ", props);

//     // const [mid, setId] = useState(id);

//     // useEffect(() => {
//     //     console.log("Chat id: ", id);
//     //     setId(mid);
//     // },[id]);

//     return (
//         <div>
//             <h1>chat page </h1>
//             <div>type: {type}</div>
//             <div>id: {id}</div>
//             {/* <ChatDetail id={id} /> */}
//         </div>
//     );
// }

// export default Chat;



import { Routes, Route, useParams } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import ChatDetail from './chatDetail.js';

function Chat(props) {
    const { type, id } = useParams();

    return (
        <div>
            {/* <h1>chat page </h1>
            <div>type: {type}</div>
            <div>id: {id}</div> */}
            <ChatDetail id={id} type={type}/>
        </div>
    );
}

export default Chat;
