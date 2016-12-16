import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

// Needed for onTouchTap
injectTapEventPlugin();

// Render the main app react component into the app div.
render(<Dashboard />, document.getElementById('root'));


