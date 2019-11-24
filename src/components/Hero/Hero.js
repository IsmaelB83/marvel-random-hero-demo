/* NPM modules */
import React, { Component } from 'react';
import marvel from 'marvel-random-hero';
/* CSS */
import './Hero.css';
// Loader
import spinnerImage from './loading.gif';

// Initializes de module
const { randomCharacter } = marvel(process.env.REACT_APP_PUBLIC, process.env.REACT_APP_PRIVATE);

/**
 * Hero Card
 */
export default class Hero extends Component {
  
  /**
   * Constructor
   */
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      hero: null
    }
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    this.getRandomCharacter();
  }
  
  /**
   * Render
   */
  render() {
    return (
        <div className='Hero'>
        { !this.state.loading && this.state.hero &&
          <div>
            <article className='Hero__Card'>
              <img src={this.state.hero.thumbnail} alt='logo'></img>
              <h1>{this.state.hero.name}</h1>
              <h3>(id {this.state.hero.id})</h3>
              <p>{this.state.hero.description}</p>
            </article>
            <button className='Hero__Button' onClick={this.getRandomCharacter}>
              Fetch another random hero
            </button>
          </div>
        }
        { this.state.loading && 
          <div className='Hero__Loading'>
            <img src={spinnerImage} alt='loading'></img>
            <h1>Loading...</h1>
          </div>
        }
        </div>
     );
  }

  /**
   * Fetch random hero from Marve API
   */
  getRandomCharacter = () => {
    this.setState({
      loading: true,
      hero: null
    }, () => {
      randomCharacter()
      .then(character => {
        this.setState({
          loading: false,
          hero: character,
        });
      })
      .catch(error => {
        console.log(error)
      });  
    });
  }
}