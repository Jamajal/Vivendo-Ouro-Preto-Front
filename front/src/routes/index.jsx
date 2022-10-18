import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import SignAccomodation from '../pages/SignAccomodation';
import SignAttraction from '../pages/SignAttraction';
import SignEvent from '../pages/SignEvent';
import SecondaryPages from '../pages/SecondaryPages';
import imgAccomodation from '../assets/images/acomodacoes-lateral.png'
import imgAttraction from '../assets/images/pontos-turisticos-lateral.png'
import imgEvents from '../assets/images/eventos-lateral.png'

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
                    <Route exact path="sign-attraction" element={<SignAttraction />} />
                    <Route exact path="sign-event" element={<SignEvent />} />
                    <Route exact path="accomodations" element={<SecondaryPages title="Acomodações de Ouro Preto e região" img={imgAccomodation}/>} />
                    <Route exact path="attractions" element={<SecondaryPages title="Atrações de Ouro Preto e região" img={imgAttraction}/>} />
                    <Route exact path="events" element={<SecondaryPages title="Eventos de Ouro Preto e região" img={imgEvents}/>} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp;