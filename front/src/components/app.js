import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

import Login from '../routes/login';
import Dashboard from '../routes/dashboard';

export default class App extends Component {
	
	handleRoute = e => {
	  this.currentUrl = e.url;
	  this.setState({
	    currentUrl: this.currentUrl
	  });
	};

	render({}, { currentUrl }) {
	  return (
	    <div id="app">
	      <Header currentUrl={currentUrl} />
	      <Router onChange={this.handleRoute}>
	        <Dashboard path="/dashboard" />
	        <Dashboard path="/dashboard2" />
	        <Login path="/" />
	      </Router>
	    </div>
	  );
	}
}
