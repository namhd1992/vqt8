import React from 'react';
import { Route } from 'react-router-dom'
import '../../styles/main.css';
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
					<main ref={(c) => this.main = c}>
						<Route exact path="/" component={Lucky_Rotation} />
					</main>
				</div>
			</div>
		)
	}
}


export default App;