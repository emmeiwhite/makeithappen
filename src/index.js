import React from 'react'; // from react module we are importing React object
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App';

// Let's write some JSX 


ReactDOM.render(<App/>,document.getElementById('root'));
// Note: Here we are directly rendering the JSX element, However actually we render App Component here at the starter
