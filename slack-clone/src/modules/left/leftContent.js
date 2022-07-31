import React from "react";
import { connect } from "react-redux";
import { appendData, asyncLoadData } from "../../store/action";
import { Link } from "react-router-dom";
import imageUrl from '/src/image/user.png';
import { Map } from 'immutable';

class LeftContent extends React.Component {

	constructor(props) {
		super(props);
		
		this.state = {
			showModal: false
		}
		this.nameTeammateRef = React.createRef();
	}

	componentDidMount() {
		//init redux data
		this.props.asyncLoadData();;
	}

	displayModal = () => {

		this.setState({
			showModal: true
		});
	}

	hideModal = () => {

		this.setState({
			showModal: false
		});
	}

	addTeammate = () => {
		console.log("add teammate");
		const nameTeammate = this.nameTeammateRef.current.value;
		console.log("New Teammate Name: ", nameTeammate);

		const newid = this.props.chats[this.props.chats.length-1].id + 1;

		let arr = [];
		arr.push({
			"id": newid,
			"name": nameTeammate,
			"picture": "https://image.ibb.co/eeqWbw/zen_1.jpg",
			"chatlog": []
		});

		this.props.appendData({
			channels: this.props.channels,
			chats: [...this.props.chats, ...arr]
		});
	}

	removeTeammate = (mid) => {
		console.log("remove teammate");
		console.log("mid: ", mid);
		// let arr = [];
		this.props.appendData({
			channels: this.props.channels,
			chats: this.props.chats.filter(item => item['id'] != mid)
		});

	}

	render() {
		// console.log("LeftContent props: ", this.props);

		const { channels, chats } = this.props;

		let channelList = channels.length > 0
			&& channels.map((item, i) => {
				return (
					<div key={"channel" + i} className="left-item">
						# <Link to={`/channel/${item.id}`}>{item.name}</Link>
					</div>
				)
			}, this);

		let chatList = chats.length > 0
			&& chats.map((item, i) => {
				return (
					<div key={"chat" + i} className="left-item">
						<img src={imageUrl} alt="picture" className="user-img" />
						<Link to={`/chat/${item.id}`}>{item.name}</Link>
						<div className="remove-mate"  onClick={() => {
							this.removeTeammate(item.id);
						}}>
							X
						</div>
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
				<div className="left-item">Direct messages

				</div>
				<div>
					{chatList}
					<div className="left-item"
						onClick={() => {
							this.displayModal();
						}}>

						{/* //svg icon add */}
						<svg className="add-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg>
						<a className="addBtn">Add teammates</a>
					</div>
				</div>
				{/* display a modal to add teammate and let user enter a username */}
				<div className="modal"
					style={{ display: this.state.showModal ? "block" : "none" }}>
					<div className="modal-content">
						{/* <div className="modal-header">
							Add Teammate
						</div> */}
						<div className="modal-body">
							<input type="text" placeholder="Enter username" ref ={this.nameTeammateRef}/>
						</div>
						<div className="modal-footer">
							<button className="btn btn-primary" onClick={() => { 
								this.addTeammate();
								this.hideModal(); }}>Add</button>
							<button className="btn btn-secondary" onClick={() => { this.hideModal(); }}>Cancel</button>
						</div>
					</div>


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