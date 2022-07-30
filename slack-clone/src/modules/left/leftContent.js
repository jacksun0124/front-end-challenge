import React from "react";
import { connect } from "react-redux";
import { appendData, asyncLoadData } from "../../store/action";
import { Link } from "react-router-dom";
import imageUrl from '/src/image/user.png';

class LeftContent extends React.Component {
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
		// console.log("LeftContent props: ", this.props);

		const { channels, chats } = this.props;

		let channelList = channels.length > 0
			&& channels.map((item, i) => {
				return (
					<div key={"channel"+i} className="left-item">
						# <Link to={`/channel/${item.id}`}>{item.name}</Link>
					</div>
				)
			}, this);

		let chatList = chats.length > 0
			&& chats.map((item, i) => {
				return (
					<div key={"chat"+i} className="left-item">
						<img src={imageUrl} alt="picture" className="user-img"/>
						<Link to={`/chat/${item.id}`}>{item.name}</Link>
					</div>
				)
			}, this);

		return (
			<div>
				<div className="left-item">Channels</div>
				<div>
					{channelList}
				</div>
				<br></br>
				<div className="left-item">Direct messages</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftContent);