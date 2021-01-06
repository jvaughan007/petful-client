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
            <h3>
                Simply sign-in and be placed in to a queue! When it's your turn, you will be given the ption to adopt a dog or a cat. Thanks for choosing adoption!
            </h3>

            

            <SignIn />

        </div>
        )}
}