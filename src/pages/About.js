import React, { Component } from 'react';
import SignIn from '../pages/SignIn';



export default class AboutPage extends Component {
    render () {
        return (
        <div className='aboutContainer'>
            <h1>
                Thinkful Adoption Agency
            </h1>
            <h3>
                Sign in below to join the queue! When you reach the front of the line, you will get a chance to choose a ct or a dog to give a loving new home to!
            </h3>

            <br />
            <div className='aboutDescContainer'>
                <div className='aboutPic' />
            </div>
            <br />

            <SignIn />

        </div>
        )}
}