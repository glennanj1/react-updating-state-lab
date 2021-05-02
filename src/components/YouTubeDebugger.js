// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
      }
    }

  handleClick = () => {
    this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
  
  };

  rClick = () => {
      this.setState({
          settings: {
          ...this.state.settings,
          video: {
              resolution: '720p'
          }
        }
      })
  }

  render() {
    return (
      <div>
          <article>{this.state.settings.bitrate}</article>
        <button className='bitrate' onClick={this.handleClick}>Bitrate</button>
        <article>{this.state.settings.video.resolution}</article>
        <button className='resolution' onClick={this.rClick}>Resolution</button>

      </div>
    )
  }
};

export default YouTubeDebugger;
