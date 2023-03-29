
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from 'react-router-dom';
import React from "react";
import Login from './components/login/Login';


function App() {
    return (

        <div className='App'>
            <Link to={`/login`} activeClassName="active"><Login /></Link>
        </div>
    );
}

export default App;





