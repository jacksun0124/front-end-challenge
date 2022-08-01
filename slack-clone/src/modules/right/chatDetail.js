import React from "react";
import { connect } from "react-redux";
import { appendData, asyncLoadData, appendChatData, removeChatData } from "../../store/action";
import ChatTop from "./chatTop";
import Messages from "./messages";
import _ from "lodash";
import { Map } from 'immutable';


//Chat is a component that will be rendered in the right
class ChatDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            type: props.type,
            chatObj: [],
            chatDetail: [],
            loaded: false,
        };
    }

    componentDidMount() {
        // console.log("ChatDetail componentDidMount");
    }

    //check if user switched to another chat
    componentDidUpdate(prevProps, prevState) {
        // console.log("ChatDetail componentDidUpdate");
        // console.log("this.props: ", this.props);


        if (this.props.id !== prevProps.id || this.props.type !== prevProps.type) {
            // console.log("ChatDetail componentDidUpdate true");

            this.setState({
                id: this.props.id,
                type: this.props.type
            });
        }

        if (this.props.chats != undefined && this.props.channels != undefined
            && (_.isEqual(this.props.chats, prevProps.chats) === false ||
                _.isEqual(this.props.channels, prevProps.channels) === false)) {

            this.setState({
                loaded: true,
            });
        }

    }

    setData = (channels, chats) => {

        this.setState({
            channels: channels,
            chats: chats,
        });
    }


    inputBox = () => {
        return (
            <div className="input-box">
                <textarea className="input-box-input" placeholder="Type a message..." />
                <button className="input-box-button"
                    // click function will be called when user click the button
                    onClick={() => {
                        this.getInputValue();
                    }}
                >Send</button>
            </div>
        );
    }

    getInputValue = () => {
        // console.log("getInputValue");
        console.log("inputBox button click");

        //get the value of the textarea
        let text = document.querySelector(".input-box-input").value;
        console.log("text: ", text);

        this.updateData(text);
    }

    updateData = (text) => {
        if (text === "") {
            return;
        } else {
            const { channels, chats } = this.props;


            //check chat type
            if (this.state.type === 'channel') {
                console.log("updateData channel");

            } else if (this.state.type === 'chat') {
                console.log("updateData chat");
                let message_id;

                chats.map((item, i) => {
                    if (item.id === parseInt(this.state.id)) {
                        console.log("updateData item.id: ", item.id);

                        // check if item.length is 0
                        if (item.chatlog.length === 0) {
                            message_id = 0;
                            return;
                        } else {
                            message_id = item.chatlog[item.chatlog.length - 1]['message_id'] + 1;
                            return;
                        }
                    }
                })

                // console.log("message_id: ", message_id);

                const msg = {
                    mid: this.state.id,
                    content: {
                        text: text,
                        side: "right",
                        timestamp: new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
                        message_id: message_id
                    }
                }

                this.props.appendChatData(msg);

            }
        }

    }


    render() {

        let { channels, chats } = this.props;

        //chatObj hold the chat message
        let chatObj = [];

        //check chat type
        if (this.state.type === 'channel') {
            // console.log("ChatDetail type: ", this.state.type);

            chatObj = [...channels.filter(item => item.id === parseInt(this.state.id))];
        } else if (this.state.type === 'chat') {
            // console.log("ChatDetail type: ", this.state.type);
            chatObj = [...chats.filter(item => item.id === parseInt(this.state.id))];
        }


        return (
            <div className="chat-panel">
                {this.state.loaded ? <ChatTop name={chatObj[0].name} /> : <div className="loading">Loading...</div>}
                <Messages id={this.state.id} messages={chatObj[0]} />
                {this.inputBox()}

            </div>
        );
    }
}

// export default ChatDetail;
const mapDispatchToProps = {
    appendData,
    asyncLoadData,
    appendChatData,
    removeChatData
}

const mapStateToProps = state => ({
    channels: state.channels,
    chats: state.chats
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatDetail);