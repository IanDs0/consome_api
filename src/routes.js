import React from 'react';
import { Link, Route, Routes, redirect, Switch, BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

const Rotas = () => {
    const firstAccess = '/home';

    return (
        <Router>
            <Routes>
                <Route
                exact
                path="/"
                element = {firstAccess === '/home' ? <Home/> : <Login/>} />

                <Route path="/home" element = {<Home/>} />
                <Route path="/login" element = {<Login/>}/>
            </Routes>
        </Router>
    );
};

export default Rotas;