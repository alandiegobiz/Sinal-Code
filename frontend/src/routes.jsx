import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quemsomos from './pages/QuemSomos';
import Cursos from './pages/Cursos';
import Faleconosco from './pages/FaleConosco';
import Fazerlogin from './pages/Login';
import Menu from './assets/components/Menu'
import Footer from './assets/components/Footer';

function Rota() {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/quemsomos" component={Quemsomos} />
                <Route path="/cursos" component={Cursos} />
                <Route path="/faleconosco" component={Faleconosco} />
                <Route path="/login" component={Fazerlogin} />
            </Switch>
            <Footer />
        </>
    );
}

export default Rota;

