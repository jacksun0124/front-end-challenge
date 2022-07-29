import React from "react";

class ChatDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
        };
        // this.updateID = this.updateID.bind(this);
    }

    componentDidUpdate() {
        console.log("ChatDetail componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("ChatDetail shouldComponentUpdate");
        // console.log("nextProps: ", nextProps);
        // console.log("nextState: ", nextState);
        // if( this.state.id !== nextState.id){
        //     console.log("ChatDetail shouldComponentUpdate true");

            
        //     return true;
        // }else{
        //     return false;
        // }
        return true;
    }

    // updateID(id) {
    //     console.log("ChatDetail updateID");
    //     log("id: ", id);
    //     this.setState ({
    //         id: id,
    //     });
    //     console.log("ChatDetail updateID");
    //     console.log("this.state.id: ", this.state.id);
    // }

    render() {
        return (
            <div>
                <h1>Chat Detail</h1>
                {this.state.id}
            </div>
        );
    }
}

export default ChatDetail;