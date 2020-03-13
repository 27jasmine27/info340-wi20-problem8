import React, { Component } from 'react'; //import React Component
import './style.css';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {pets: this.props.pets};
  }
  adopt = (name) => {
    this.setState((currentState) => {
      let current = _.find(currentState.pets, ['name', name]);
      current.adopted = true;
      return current;
    });
  }

  render() {
    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="nav" className="col-3">
              <BreedNav breeds={Object.keys(_.groupBy(this.state.pets, 'breed'))}/>
              <AboutNav />
            </div>

            <div id="petlist" className="col-9">
              <PetList pets={this.state.pets} adoptCallback={this.adopt} />
            </div>
          </div>
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a>
          </small>
        </footer>
      </div>
    );
  }
}

class AboutNav extends Component {
  render() {
    return(
      <nav id="about">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="/">How to Adopt</a></li>
          <li><a href="/volunteer">Volunteering</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/donate">Donate</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    );
  }
}

class PetCard extends Component {
    constructor(props) {
      super(props);
      this.state= {};
    }
  handleClick = () => {
    this.props.adoptCallback(this.props.pets.name);
  };
  render() {
    let pet = this.props.pets.adopted;
    return (
      <div className="card clickable" onClick={this.handleClick}>
        <img
          className="card-img-top"
          src={this.props.pets.img}
          alt={this.props.pets.name}
        />
        <div className="card-body">
          <h3 className="card-title">
            {this.props.pets.name + ' '}{pet ? '(Adopted)' : ''}
          </h3>
          <p className="card-text">
            {this.props.pets.sex + ' ' + this.props.pets.breed}
          </p>
        </div>
      </div>
    );
  }
}

class PetList extends Component {
  render() {
    let pets = this.props.pets || [];
    let petArray = this.props.pets.map((pet)=> {
      return <PetCard pets={pet} adoptCallback={this.props.adoptCallback} key={pet.name} />;
    });
    return(
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">{petArray}</div>
      </div>
    );
  }
}

class BreedNav extends Component {
  render() {
    //fails because it is expecting 2 and gets all 4 of the breeds below?
      // <nav id="breedLinks">
      //   <h2>Pick a Breed</h2>
      //   <ul className="list-unstyled">
      //     <li><a href="/">Husky</a></li>
      //     <li><a href="/terrier">Terrier</a></li>
      //     <li><a href="/hound">Hound</a></li>
      //     <li><a href="/mix">Mix</a></li>
      //   </ul>
      // </nav>
      let breedArray = this.props.breeds.map((breed) => {
        return(
        <li key={breed}><a href="">{breed}</a></li>
        );
      });
        return(
          <nav id="breedLinks">
            <h2>Pick a Breed</h2>
        <ul className="list-unstyled">{breedArray}</ul>
          </nav>
        );
  }
}

export default App;
