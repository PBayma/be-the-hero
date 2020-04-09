import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';

//Switch faz com que uma rota seja executada por momento
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}