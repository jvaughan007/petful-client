import React, { Component } from 'react';
import mockPeople from '../store';
import { REACT_APP_API_BASE } from '../config.js'

class Confirmed extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          peopleQueue: [], 
          person: this.props.userName,
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
        }
      this.timer = null;
  }
  
  componentDidMount() {
    this.getPeopleQueue();
    this.getAnimals();
    
  }

  getAnimals = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`${REACT_APP_API_BASE}/pets`, requestOptions)
      .then((pets) => pets.json())
      .then((pets) => this.setState({ pets }));
  }

  getPeopleQueue = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch(`${REACT_APP_API_BASE}/people/people_queue`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peopleQueue: data })
        console.log('this is the peopleque', this.state.peopleQueue)
      })
      .catch((error) => console.log('error', error));
    };

    adoptionPage(pet) {
      return (
        <div className='pet-card'>
          <img src={pet.imageURL} alt={pet.description} />
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

  handleHomeRedirect() {
      return window.location.href = '/';
  }

  addPeople = (person) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var rawData = JSON.stringify({ person: person });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: rawData,
    };

    return fetch(`${REACT_APP_API_BASE}/people`, requestOptions);
  };

  removePeople = (animal) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    
    var raw = JSON.stringify({ type: animal });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
    };

    return fetch(`${REACT_APP_API_BASE}/pets`, requestOptions);
  };

  asyncHandleListCycle = async () => {
    const newPerson = mockPeople[Math.floor(Math.random() *mockPeople.length)]
    let petType = newPerson.length % 2 === 0 ? 'cat' : 'dog';
    if (this.state.peopleQueue[0] === this.props.userName) {
        // stop the timeout function
          this.myStopFunction();
          // push to the Adoption Page
          window.location.href = '/adopt';
      } else if (this.state.peopleQueue.length < 5) {
        await this.addPeople(newPerson)
          this.getPeopleQueue();
          this.getAnimals();
          this.timer = setTimeout(() => this.asyncHandleListCycle(), 1000);
      } 
      else {
          await this.removePeople(petType)
          await this.addPeople(newPerson)
          this.getPeopleQueue();
          this.getAnimals();
          this.timer = setTimeout(() => this.asyncHandleListCycle(), 5000);
      }
  
};

  myStopFunction = () => {
      clearTimeout(this.timer);
  }
  
  render() {
    return (
      <div>
          <div className='confirmContainer'>
            <div className='confirmOne'>
              <h1>
                CONGRATULATIONS!
              </h1>
            </div>
            <div className='confirmTwo'>
              <h2>
                We hope your new furry friend warms your heart and home!
              </h2>
            </div>
            <div className='confirmThree'>
              <h3>
                Click the "back to home" button to be redirected to our home page!
              </h3>
            </div>
            <div className='backHome'>
            <button onClick={this.handleHomeRedirect}>
              Back to Home
            </button>
          </div>
          </div>
          <div className='peopleQueue_container'>
                <ul className='peopleQueue'>
                  {this.state.peopleQueue && this.state.peopleQueue.map((person) => (
                    <li className='item'>{person}</li>
                  ))}
                </ul>
                <div className='queueControls'>
                <button onClick={this.asyncHandleListCycle}>
                        Next Person
                </button>
                    <button onClick={this.myStopFunction}>Hold the Line!</button>
                    </div>
            <div className='petQueueControl'>
                <div className='dog-card'>{this.adoptionPage(this.state.pets.dog)}</div>
                <div className='cat-card'>{this.adoptionPage(this.state.pets.cat)}</div>
            </div>

        </div>
      </div>
    );
  }
}

export default Confirmed;