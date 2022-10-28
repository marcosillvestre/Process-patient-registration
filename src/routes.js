import React from "react";
import Home from './containers/Home'
import ListPacients from "./containers/PacientsList";
import DeletePacient from './containers/DeletePacients'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Routes() {
    return (
        <Router>
            <Switch>

                <Route exact component={Home} path="/" />
                <Route component={ListPacients} path="/pacientes" />
                <Route component={DeletePacient} path="/delete" />



            </Switch>
        </Router>
    )
}

export default Routes