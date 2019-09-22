import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './styles/styles.css';
import MainContainer from "./components/page/MainContainer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={(props) => <MainContainer location={props.location}/>}/>
            </React.Fragment>
        )
    }
}

export default (App);
