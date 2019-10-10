import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from './config/routes';
import Navigation from './views/nav/nav';

const App = ({ 
	clientUnavailable, 
	tokenExpired 
}: { 
	clientUnavailable: boolean, 
	tokenExpired: boolean 
}) => {
	if (clientUnavailable) return <p>error!</p>;
	return (
		<Fragment>
			<Navigation />
			<Switch>
				{routes.map(({ component, exact, path }) => (
					<Route	
						component={component}
						exact={exact}
						key={path}
						path={path}
					/>
				))};
				{/* {tokenExpired && <Redirect from="*" exact to="sign-in" />} */}
			</Switch>
			{tokenExpired && <Redirect from="*" exact to="sign-in" />}
		</Fragment>
	);
};

export default App;