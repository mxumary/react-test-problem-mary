import React from 'react';

export default class App extends React.Component { // makes it a react component
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler() {
    this.setState((state) => {return {toggle: !state.toggle}})
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button onClick={this.onClickHandler}>{this.state.toggle ? 'click me!': 'thanks'}</button>
      </div>
    );
  }
}