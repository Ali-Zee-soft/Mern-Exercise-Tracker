
import React, { useState } from "react"
import './login.css'
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-content">
          <h3 className="form-title">Login</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <Link to={`/signup`} activeClassName="active">
              Sign Up
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}