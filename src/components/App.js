import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import GIPHY_API_KEY from "../giphy-api-key";

var giphy = require('giphy-api')(GIPHY_API_KEY);

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifUrl: ''
    }
    this.randomGif = this.randomGif.bind(this);
  }

  randomGif() {
    giphy.search('Hello').then((response) => { 
        console.log(response.data.length)

        this.setState({ gifUrl: _.sample(response.data).images.downsized_medium.url })
        // _.sample(collection)

    });
  }

  render() {
    return (
      <div>
        <div className='parallax'>
          <div className='welcome-div'>
            <h1>Welcome</h1>
            <Link to='/ViewList'>
              <button className='welcomeButton'>View accounts to complete</button>
            </Link>
          </div>
        </div>

        <div className='middle'>
          <div className='middleRow'>
            <img className='middleRowImages' alt="Persistent" src='http://i.imgur.com/ZYfxruH.png' />
            <img className='middleRowImages' alt="Dynamic" src='http://i.imgur.com/arMvDiQ.png' />
            <img className='middleRowImages' alt="Tough" src='http://i.imgur.com/WcxzXgB.png' />
          </div>

        </div>

        <div className='parallax'>
          <div className='helloGif'>
            <h1>Hello!</h1>
            <button className='randomGifButton' onClick={ () => {this.randomGif()} }>Click for Random Gif</button>
            <div>
              <img src={this.state.gifUrl} />
            </div>
          </div>
        </div>

        <div className='bottom'>
              <div className='bottom-content'>Keep up with what's happening!</div>
              <input placeholder='Enter Email'></input><button>Submit</button>
              <div>
                <img className='bottom-icons' alt="Bottom Icons" src='http://i.imgur.com/wJ4Zl6G.png' />
              </div>
        </div>

      </div>
    );
  }
}

export default App;
