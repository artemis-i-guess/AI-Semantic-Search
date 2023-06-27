import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AlertContainer } from "./components/CustomAlert/alert";
import "./components/CustomAlert/CustomAlert.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<AlertContainer floatingTime={5000} />
	</React.StrictMode>,
	document.getElementById("root")
);

