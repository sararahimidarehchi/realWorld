import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import SignUpPage from './components/signUpPage/signUpPage';
import Profile from './components/profile/profile';
import Settings from './components/settings/settings';
import Article from './components/article/article';
import NewArticle from './components/newArticle/newArticle';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Router>
					<div>
						<Route exact path="/" component={HomePage} />
						<Route path="/register" component={SignUpPage} />
						<Route path="/profile" component={Profile} />
						<Route path="/settings" component={Settings} />
						<Route path="/newArticle" component={NewArticle} />
						<Route path="/article" component={Article} />
					</div>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
