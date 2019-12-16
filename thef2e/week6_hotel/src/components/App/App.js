import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Room } from '../Room/Room';
import '../../assets/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
    render() {
        return (
            <div className="main_container">
                {/* The corresponding component will show here if the current URL matches the path */}
                <Route path="/" exact component={Main} />
                <Route path="/room/:roomId" component={Room} />
                {/* <Route path="/electronics" component={Electronics} /> */}
            </div>
        );
    }
}

export default App;


