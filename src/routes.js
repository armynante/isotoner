import React from 'react';
import { Route, IndexRoute } from 'react-router';
import baseContainer from './containers/baseContainer.js';
// import { Main } from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default (
	<Route path='/'>
		<IndexRoute component={baseContainer} />
	</Route>
);
