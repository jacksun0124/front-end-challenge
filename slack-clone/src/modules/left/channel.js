// Books.js
import React from "react";
import { connect } from "react-redux";
import { appendData, asyncLoadData } from "../../store/action";
import { Link } from "react-router-dom";

class Channels extends React.Component {
	componentDidMount() {
		// let name = 'Channels';
		let arr = [];

		this.props.asyncLoadData();

		// arr.push({
		// 	book_id: 1,
		// 	title: 'Dune',
		// 	author: 'Frank Herbert',
		// 	year: 1965
		// });

		// arr.push({
		// 	book_id: 2,
		// 	title: 'Hyperion',
		// 	author: 'Dan Simmons',
		// 	year: 1989
		// });

		// this.props.appendData({
		// 	name: name,
		// 	channels: [...this.props.channels, ...arr]
		// });
	}

	render() {
		console.log("Channels props: ", this.props);

		const {  channels, chats } = this.props;

		let channelList = channels.length > 0
			&& channels.map((item, i) => {
				return (
					<div key={i} >
						<Link to={`/channel/${item.id}`}>{item.name}</Link>
					</div>
				)
			}, this);
		
		let chatList = chats.length > 0
			&& chats.map((item, i) => {
				return (
					<div key={i} >
						<Link to={`/chat/${item.id}`}>{item.name}</Link>
					</div>
				)
			}, this);

		return (
			<div>
				<div>Channels</div>
				<div>
					{channelList}
				</div>
				<div>Chats</div>
				<div>
					{chatList}
				</div>

			</div>
		);
	}
}

const mapDispatchToProps = {
	appendData,
	asyncLoadData
}

const mapStateToProps = state => ({
	channels: state.channels,
	chats: state.chats
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);