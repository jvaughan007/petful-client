import React, { Component } from 'react';
import SignIn from '../pages/SignIn';

export default class AboutPage extends Component {
    render () {
        return (
        <div className='aboutContainer'>
            <p>
                Welcome to our pet adoption page!
            </p>

            <br />

            <SignIn />

        </div>
        )}
}