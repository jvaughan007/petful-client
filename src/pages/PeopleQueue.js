import React, { Component } from 'react';
import mockPeople from '../store';

class PeopleQueue extends Component {
   
    constructor(props) {
        super(props);
        this.state = { peopleQueue: [], person: this.props.userName }
        this.timer = null;
    }

    componentDidMount() {
        this.getPeopleQueue();
    }

   getPeopleQueue = () => {
    var requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:8000/people/people_queue', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ peopleQueue: data })
        console.log('this is the people queue', this.state.peopleQueue)
      })
      .then()
      .catch((error) => console.log('error', error));
    };

   addPeople = (person) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var rawData = JSON.stringify({ person: person });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: rawData,
    };

    return fetch('http://localhost:8000/people', requestOptions);
  };


 removePeople = (type) => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var rawData = JSON.stringify({ type: type });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: rawData,
    };

    return fetch('http://localhost:8000/pets', requestOptions);
  };

  asyncHandleListCycle = async () => {
      const newPerson = mockPeople[Math.floor(Math.random() *mockPeople.length)]
      if (this.state.peopleQueue[0] === this.props.userName) {
          // stop the timeout function
            this.myStopFunction();
            // push to the Adoption Page
            window.location.href = '/adopt';
        } else {
            await this.removePeople('cat')
            await this.addPeople(newPerson)
            this.getPeopleQueue();
            this.timer = setTimeout(() => this.asyncHandleListCycle(), 5000);
        }
    
  };

    myStopFunction = () => {
        clearTimeout(this.timer);
    }

  render() { 
      
    console.log(this.props)
        return (
          <div className='queue_container'>
            <ul className='queue'>
              {this.state.peopleQueue && this.state.peopleQueue.map((person) => (
                <li>{person}</li>
              ))}
            </ul>
            <button onClick={this.asyncHandleListCycle}>
                    Start Adding/Removing People in queue
            </button>
                <button onClick={this.myStopFunction}>Stop Simulation</button>
          </div>
        );
    }
}
 
export default PeopleQueue;