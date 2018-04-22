import React from 'react';
import {Switch,Route} from 'react-router-dom';
import movies from './movies';
import ticketboxoffice from './ticketboxoffice';
import userhome from './userhome';
import moviedetails from './moviedetails';
import seatpicker from './seatpicker';
import admin from './admin';
import signin from './signin';
import signup from './signup';

const Main = () => (
    <Switch>
        <Route exact path = '/' component={userhome}/>
        <Route path = '/transaction/ticketboxoffice' component={ticketboxoffice} />
        <Route path = '/transaction/seatpicker' component={seatpicker} />
        <Route path = '/movies' component={movies}/>
        <Route path ='/moviedetails/:mid' component={moviedetails}/>
        <Route path = '/admin' component={admin}/>
        <Route path = '/signin' component={signin}/>
        <Route path = '/signup' component={signup}/>
    </Switch>
)

export default Main;
