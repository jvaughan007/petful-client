import React, { Component } from 'react';
import { REACT_APP_API_BASE } from '../config.js'
import { withRouter } from 'react-router';

class Adopt extends Component {
  state = {
    personName: 'Place Holder Bob',
    pets: {
      dog: {
        name: '',
        age: '',
        imgURL: '',
        description: '',
        breed: '',
        gender: '',
        story: '',
      },
      cat: {
        name: '',
        age: '',
        imgURL: '',
        description: '',
        breed: '',
        gender: '',
        story: '',
      },
    },
  };

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`${REACT_APP_API_BASE}/pets`, requestOptions)
      .then((pets) => pets.json())
      .then((pets) => this.setState({ pets }));
  }

  adoptionPage(pet) {
    return (
      <div className='pet-card'>
        <div className='imgControl'>
        <img src={pet.imageURL} alt={pet.description} />
        </div>
        <div className='petDetails'>
          <p>Name: {pet.name}</p>
          <p>Breed: {pet.breed}</p>
          <p>Gender: {pet.gender}</p>
          <p>Age: {pet.age}</p>
          <p>Description: {pet.description}</p>
          <p>Story: {pet.story}</p>
        </div>
      </div>
    );
  }

  handleClickAdopt(type, e) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ type: type });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${REACT_APP_API_BASE}/pets`, requestOptions)
      .then((response) => response.text())
      .then((result) => (this.props.history.push('/adopted')))
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <div className='pets-container'>
        <h2>Congratulations! It is your turn!</h2>
        <p>Pick your new best friend by pressing the 'Adopt' button below. You can choose a dog or a cat.</p>
        <div className='selectContainer'>
        <form
          className='select-dog'
          onSubmit={(e) => this.handleClickAdopt('dog', e)}
        >
          <div className='dog-card'>
            <div>{this.adoptionPage(this.state.pets.dog)}</div>
            <div className='buttonControl'>
            <button type='submit' className='adopt-dog'>Adopt Dog</button>
            </div>
          </div>
        </form>
        <form
          className='select-cat'
          onSubmit={(e) => this.handleClickAdopt('cat', e)}
        >
          <div className='cat-card'>
            <div>{this.adoptionPage(this.state.pets.cat)}</div>
            <div className='buttonControl'>
            <button type='submit' className='adopt-cat'>Adopt Cat</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Adopt);


