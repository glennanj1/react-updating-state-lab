// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    console.log(this.state.hasBeenClicked);
  }

  render() {
    return (
      <div>
        <p>I have clicked {this.state.timesClicked} times!</p>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
