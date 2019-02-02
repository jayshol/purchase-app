import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import Purchase from './components/Purchase';

ReactDOM.render(<Provider store={store}>
					<Purchase />
				</Provider>, 
				document.getElementById('root')
				);

