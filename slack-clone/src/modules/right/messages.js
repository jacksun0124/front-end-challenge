import React from "react";
import { connect } from "react-redux";
import { removeChatData } from "../../store/action";
import Message from "./message";
import _ from "lodash";


//Messages a list of message components
class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            type: props.type,
            messages: "",
            loaded: false,
        }
    }

    componentDidMount() {
        console.log("Messages componentDidMount");
    }

    getName = (item) => {
        if (this.props.type === "chat") {
            return item.side === "left" ? this.props.messages.name : "Me";
        } else {
            return item.side === "left" ? item.name: "Me";
        }

    }

    //check if user switch to another chat
    componentDidUpdate(prevProps, prevState) {
        //use lodash to compare two objects
        if (this.props.messages != undefined &&
            _.isEqual(this.props.messages, prevProps.messages) === false
        ) {

            this.setState({
                loaded: false,
            }, () => {
                const msgs = this.props.messages.chatlog.map((item, i) => {
                    // console.log("ChatDetail item "+i+": ", item);   
                    return <div key={this.props.type + this.props.id + item.message_id + i} className="msg-item">
                        <Message name={this.getName(item)} time={item.timestamp} message={item.text} />
                        <div className="remove-msg" onClick={() => {
                            this.removeMsg(item.message_id);
                        }}>
                            X
                        </div>
                    </div>
                })

                this.setState({
                    messages: msgs,
                    loaded: true,
                })
            });

        }

    }

    removeMsg = (index) => {
        // const { channels, chats } = this.props;

        console.log("remove msg");
        console.log("id: ", this.state.id);
        console.log("index: ", index);

        this.props.removeChatData(this.state.id, index, this.state.type);
    }

    render() {
        return (

            <div className="msg" key={this.state.type+"_"+this.state.id}>
                {this.state.loaded ? this.state.messages : <div>Loading...</div>}
            </div>
        )
    }
}

const mapDispatchToProps = {
    removeChatData
}

const mapStateToProps = state => ({
    channels: state.channels,
    chats: state.chats
});


export default connect(mapStateToProps, mapDispatchToProps)(Messages);