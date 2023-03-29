import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/list" className="nav-link">Exercise</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>

                    </ul>
                    <ul class="navbar-nav text-right" >
                        <li className="navbar-item text-right ">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/signup" className="nav-link">Signup</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        );
    }
}