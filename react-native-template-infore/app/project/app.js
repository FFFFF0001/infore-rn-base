/**
 * Created by coderxuan on 2017/5/6.
 */
import React, {Component} from 'react';
import Navigation from '../config/nav/router'

class App extends Component {

    render() {
        return (
            <Navigation ref={(navigation) => {
                this._navigation = navigation
            }}/>
        );
    }
}

export default App;