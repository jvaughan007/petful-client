import React, { Component } from 'react';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
        }
    }

    redirect = () => {
        return window.location.href = "/queue";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('completed the handle submit');
        fetch('http://localhost:8000/people', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json,"
            },
            body: JSON.stringify({
                person: this.state.person
            }),
        })
        .then(() => {
            console.log('redirect reached and this the person', this.state.person);
            this.redirect();
            
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

    render() {
        const { person } = this.state;
        return (
            <div className="signIn-container">
                <div className="signIn-form">
                    <h2>Please sign in below!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="person">Name</label>
                            <input required type="text" id="person" value={person} onChange={this.handlePerson} placeholder="i.e. - John Doe" />
                        </div>
                        <div className="signInFormButton">
                            <button type="submit" className="signInButton">Sign-In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
