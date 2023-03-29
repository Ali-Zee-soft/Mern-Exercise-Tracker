import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import App from './App';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import EditExercise from './components/Edit-Exercise';
import CreateExercise from './components/Create-Exercise';
import CreateUser from './components/Create-User';
import ExercisesList from './components/Exercises-list';
import Navbar from './components/Navbar';

const WithNav = ({ renderComp }) => {
  return (
    <div>
      <Navbar />
      {renderComp()}
    </div>
  );
}

const user = JSON.parse(localStorage.getItem("userLogged"));
const router = createBrowserRouter([
  // Sign Up form
  {
    path: "/",
    element: user ? <App /> : <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/list",
    element:
      <WithNav renderComp={() => {
        return <ExercisesList />
      }} />
  },

  {
    path: "/edit/:id",
    element:
      < WithNav renderComp={() => {
        return <EditExercise />
      }} />
  },
  {
    path: "/create",
    element:
      < WithNav renderComp={() => {
        return <CreateExercise />
      }} />

  },
  {
    path: "/user",
    element:
      < WithNav renderComp={() => {
        return <CreateUser />
      }} />
  },

  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

