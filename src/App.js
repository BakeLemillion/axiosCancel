import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from '@material-ui/core'

import Mainpage from './pages/mainPage'


function App() {

    return (
        <Router>
            <div className="app" >
                <div>
                    <Grid container direction='column'>
                        <Switch>
                            <Route exact path="/" component={Mainpage} exact />
                        </Switch>
                    </Grid>
                </div>
            </div >
        </Router>

    )
}

export default App 