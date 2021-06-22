import React from 'react';
import {Router,Switch,Route} from 'react-router-dom';


import history from  '../history'
import UploadPage1 from './Page1';
import TechPage2 from './Page2';


class App extends React.Component{

    render(){
        return(
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/'  component={TechPage2}  />
                        <Route exact path='/upload' component={UploadPage1} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App