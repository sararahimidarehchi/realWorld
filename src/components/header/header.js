import React from 'react';

const Header = () => {
	return (
		<div>
			<meta charSet="utf-8" />
			<title>Conduit</title>
			{/* Import Ionicon icons & Google Fonts our Bootstrap theme relies on */}
			<link
				href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
				rel="stylesheet"
				type="text/css"
			/>
			<link
				href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic"
				rel="stylesheet"
				type="text/css"
			/>
			{/* Import the custom Bootstrap 4 theme from our hosted CDN */}
			<link rel="stylesheet" href="//demo.productionready.io/main.css" />
			<nav className="navbar navbar-light">
				<div className="container">
					<a className="navbar-brand" href="index.html">
						conduit
					</a>
					<ul className="nav navbar-nav pull-xs-right">
						<li className="nav-item">
							{/* Add "active" class when you're on that page" */}
							<a className="nav-link active">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">
								<i className="ion-compose" />&nbsp;New Post
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">
								<i className="ion-gear-a" />&nbsp;Settings
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">
								Sign up
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
