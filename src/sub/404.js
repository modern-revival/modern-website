import React, { Component } from 'react';
import wip from '../img/cone.png';
import underconst from '../img/underconst.png';

export default class Notfound extends Component{
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={wip} className="App-logo" alt="logo" />
                <p>
                <img src={underconst} alt="construction" width="30%"/>
                </p>
            </header>
            </div>
        )
    }
}