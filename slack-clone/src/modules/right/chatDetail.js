import React from "react";
import { connect } from "react-redux";
import { appendData, asyncLoadData, updateChats } from "../../store/action";
import ChatTop from "./chatTop";
import Message from "./message";
import _ from "lodash";


//Chat is a component that will be rendered in the right
class ChatDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            type: props.type,
            channels: [],
            chats: [],
        };
    }

    componentDidMount() {
        console.log("ChatDetail componentDidMount");

        const { channels, chats } = this.props;
        console.log("ChatDetail Channels: ", channels);


        // this.setState({
        //     channels: channels,
        //     chats: chats,
        // });
    }

    //check if user switch to another chat
    componentDidUpdate(prevProps, prevState) {
        console.log("ChatDetail componentDidUpdate");

        // console.log("prevProps id: ", prevProps.id);
        // console.log("prevProps type: ", prevProps.type);
        // console.log("this.props id: ", this.props.id);
        // console.log("this.props type: ", this.props.type);

        if (this.props.id !== prevProps.id || this.props.type !== prevProps.type) {
            // console.log("ChatDetail componentDidUpdate true");

            this.setState({
                id: this.props.id,
                type: this.props.type
            });
        }
        // else if (!_.isEqual(this.props.chats, prevProps.chats)) {
        //     console.log("chats not equal");
        // }

        

    }

    setData = (channels, chats) => {

        this.setState({
            channels: channels,
            chats: chats,
        });
    }

    messages = (obj) => {
        var rows = [];
        obj.chatlog.map((item, i) => {
            rows.push(
                <div key={"msg-" + obj.id + i} className="msg-item">
                    <Message name={obj.name} time={item.timestamp} message={item.text} />
                </div>
            )
        });

        return (
            <div className="msg" key={obj.id}>{rows}</div>
        );

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
            let tempChannels = channels;
            let tempChats = chats;
            //check chat type
            if (this.state.type === 'channel') {
                console.log("updateData channel");
                channels.map((item, i) => {
                    if (item.id === this.state.id) {
                        channels[i].chatlog.push({
                            timestamp: new Date().toLocaleString(),
                            text: text,
                            message_id: Math.floor(Math.random() * 1000000)
                        });
                    }
                });

                //channels log each text message
                console.log(JSON.stringify(channels));

                this.props.appendData({
                    channels: channels,
                    chats: chats
                });



            } else if (this.state.type === 'chat') {
                console.log("updateData chat");
                tempChats.map((item, i) => {
                    if (item.id === parseInt(this.state.id)) {
                        tempChats[i].chatlog.push({
                            timestamp: new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }),
                            text: text,
                            message_id: Math.floor(Math.random() * 1000000)
                        });
                    }
                }
                    , this);

                

                updateChats(tempChats);

                const { channels, chats } = this.props;


                chats.map((item, i) => {
                    if (item.id === parseInt(this.state.id)) {
                        //channels log each text message
                        console.log("new chat: "+ JSON.stringify(item));
                    }
                });

            }
        }

    }


    render() {
        // console.log("ChatDetail props: ", this.props);

        const { channels, chats } = this.props;



        // console.log("ChatDetail Channels: ", channels);
        // console.log("ChatDetail Chats: ", chats);


        //chatObj hold the chat message
        let chatObj = [];
        let chatDetail = [];

        //check chat type
        if (this.state.type === 'channel') {
            // console.log("ChatDetail type: ", this.state.type);

            chatDetail = channels.length > 0
                && channels.map((item, i) => {

                    if (item.id == parseInt(this.state.id)) {
                        console.log("ChatDetail item.id: ", item.id);
                        chatObj = item;
                        return this.messages(item);
                    }
                }, this);
        } else if (this.state.type === 'chat') {
            // console.log("ChatDetail type: ", this.state.type);
            chatDetail = chats.length > 0
                && chats.map((item, i) => {

                    if (item.id === parseInt(this.state.id)) {
                        console.log("ChatDetail item.id: ", item.id);
                        chatObj = item;
                        return this.messages(item);
                    }
                }, this);
        }

        return (
            <div className="chat-panel">
                <ChatTop name={chatObj.name} />
                {/* {this.state.id}
                {this.state.type} */}
                {chatDetail}
                {this.inputBox()}

            </div>
        );
    }
}

// export default ChatDetail;
const mapDispatchToProps = {
    appendData,
    asyncLoadData,
    updateChats
}

const mapStateToProps = state => ({
    channels: state.channels,
    chats: state.chats
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatDetail);