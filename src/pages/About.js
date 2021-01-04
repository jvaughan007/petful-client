import React, { Component } from 'react';
import SignIn from '../pages/SignIn';
import '../index.css';

export default class AboutPage extends Component {
    render () {
        return (
        <div className='aboutContainer'>
            <h1>
                Thinkful Adoption Agency
            </h1>

            <br />

            <SignIn />

        </div>
        )}
}