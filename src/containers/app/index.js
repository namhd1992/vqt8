import React from 'react';
import { Route } from 'react-router-dom'
import '../../styles/main.css';
import Lucky from '../lucky';
import Lucky_detail from '../lucky_detail';
import Lucky_Item from '../lucky_item';
import Lucky_BuyTurn from '../lucky_buyturn';
import Lucky_History from '../lucky_history';
import Lucky_Live from '../lucky_live';
import Checkin from '../checkin';
import Mission from '../mission';
import MenuAppBar from '../../components/MenuAppBar';
import Game_detail from '../game_detail';
import Auction from '../auction';
import Auction_detail from '../auction_detail';
import History from '../shop_history';
import Lucky_Rotation from '../lucky_rotation'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			main: null,
			backgroundColor:'#fff',
		};
	}

	render() {
		return (
			<div style={{ backgroundColor: this.state.backgroundColor }}>
				{/* <div style={{maxWidth:"1200px", margin:"auto", background: this.state.backgroundColor }}> */}
				<div>
				<MenuAppBar isMobile={this.state.isMobile} pathname={document.location.pathname} compact={this.state.compact} scrolling={this.state.scrolling}
						data={[{ url: "home", label: "home" }, { url: "about", label: "about" }]}></MenuAppBar>
					<main ref={(c) => this.main = c}>
						<Route exact path="/" component={Lucky_Rotation} />
					</main>
				</div>
			</div>
		)
	}
}


export default App;