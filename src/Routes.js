import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import ListPokemon from './pages/ListPokemon'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/lista-pokemon"><ListPokemon /></Route>
        </Switch>
    )
}