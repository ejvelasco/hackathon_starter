import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import WebFontLoader from 'webfontloader';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import LogIn from './components/LogIn';
import Register from './components/Register';
import GetStarted from './components/GetStarted';
import RegisterAdvertiser from './components/RegisterAdvertiser';
import RegisterInfluencer from './components/RegisterInfluencer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const target = document.getElementById('root');

class Routes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			domain: 'http://localhost:5010',
			user: {
				id: null,
				firstName: '', 
				lastName: '',
				email: '',
			}
		}
	}
	componentDidMount() {
		// const newState = this.state;
		// axios.get('/users/state')
		// 	.then((res) => {
		// 		const emptyUser = {
		// 			id: null,
		// 			firstName: '', 
		// 			lastName: '',
		// 			email: '',		
		// 		}
		// 		const user = res.data.user || emptyUser;
		// 		newState.user = user;
		// 		this.setState(newState);
		// 	});
	}
	renderHome(userId) {
		const location = window.location.href;
		const url = location.replace(this.state.domain, '');
		const newURL = (url === '/') ? '/users/home' : url; 
		return () => {
			{return userId ? <Redirect to={newURL}/> : <App />;}
		} 
	}
	render() {
		const user = this.state.user;
		return (
			<Router>
				<div id="container">
					<Switch>
				  	<Route path="/start" component={GetStarted}/>
				  	<Route path="/login" component={LogIn}/>
				  	<Route path="/login" component={LogIn}/>
				  	<Route path="/register/influencer" component={RegisterInfluencer}/>
				  	<Route path="/register/advertiser" component={RegisterAdvertiser}/>
				  	<Route path="/" render={this.renderHome(user.id)}/>
					</Switch>
				</div>
			</Router>
		); 
	}
}
ReactDOM.render(<Routes />, target);
registerServiceWorker();
