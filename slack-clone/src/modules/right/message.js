import React from "react";
import imageUrl from '/src/image/user.png';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            time: this.props.time,
            message: this.props.message,
            // img: ""
        }
    }

    render() {
        return (
            <div>
                <div className="message-box">
                    <div className="message-box-left">
                        <img src={imageUrl} alt="picture" className="user-img" />
                    </div>
                    <div className="message-box-right">
                        <div className="message-box-right-top">
                            <div className="message-box-right-top-name">{this.state.name}</div>
                            <div className="message-box-right-top-time">{this.state.time}</div>
                        </div>
                        <div className="message-box-right-bottom">
                            <div className="message-box-right-bottom-message">{this.state.message}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;