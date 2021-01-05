import React, { Component } from 'react';
import PeopleQueue from './PeopleQueue';
import { REACT_APP_API_BASE } from '../config.js'



export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
            queueToggle: false
        }
    }

    redirect = () => {
        return window.location.href = "/queue";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const person = { person: this.state.person }
        console.log('completed the handle submit');
        fetch(`${REACT_APP_API_BASE}/people/`, {
            method: "POST",
            headers: {
                
                "content-type": "application/json",
            },
            body: JSON.stringify(
                person
            ),
        })
        .then(() => {
            this.setState({queueToggle: true})
        })
        .catch((e) => {
            console.log(e);
        })
    }

    handlePerson = (e) => {
        this.setState({
            person: e.target.value
        })
    }

    handleRender(boolean) {
        if (boolean === true) {
            return (
            <div>
            <PeopleQueue userName={this.state.person} />
            </div>
          )
        }
        return (
                <div className="signIn-container">
                    <div className="signIn-form">
                        <h2>Please sign in below!</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="person">Name</label>
                                <input required type="text" id="person" value={this.state.person} onChange={this.handlePerson} placeholder="i.e. - John Doe" />
                            </div>
                            <div className="signInFormButton">
                                <button type="submit" className="signInButton">Sign-In</button>
                            </div>
                        </form>
                    </div>
                </div>
        )
      }

    render() {
        const { queueToggle } = this.state;
        return (
            <div>
            {this.handleRender(queueToggle)}
            </div>
        )
    }
};


