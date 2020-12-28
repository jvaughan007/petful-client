import React, { Component } from 'react';


export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('completed the handle submit');
        fetch('/people', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json,"
            },
            body: JSON.stringify({
                name: this.state.name
            }),
        })
        .then((res) => res.json())
        .then(() => {
            
            window.location.href = "/adopt";
            
        })
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const { name } = this.state;
        return (
            <div className="signIn-container">
                <div className="signIn-form">
                    <h2>Please sign in below!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input required type="text" id="name" value={name} onChange={this.handleName} placeholder="i.e. - John Doe" />
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
