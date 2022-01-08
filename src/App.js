import './App.css';
import React from 'react';

export default class App extends React.Component {

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <h1>Beer Recipe Finder</h1>
        <p>Find full recipes <a href="https://brewdogmedia.s3.eu-west-2.amazonaws.com/docs/2019+DIY+DOG+-+V8.pdf" target="_blank">here</a></p>
        <form onSubmit={this.handleSubmit} >
        <select>
          <option value='lager'>Lager</option>
          <option value='saison'>Saison</option>
          <option value='ipa'>IPA</option>
          <option value='porter'>Porter</option>
          <option value='stout'>Stout</option>
        </select>
        <button type='submit'>Get Recipes</button>
        </form>
      </div>
    )
}
}

