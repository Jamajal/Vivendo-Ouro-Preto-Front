import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import SignAccomodation from '../pages/SignAccomodation'

import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed ? <Item /> : <Login />
}

const RoutesApp = () =>{
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="sign-up" element={<SignUp />} />
                    <Route exact path="sign-accomodation" element={<SignAccomodation />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;