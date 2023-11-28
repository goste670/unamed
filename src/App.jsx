import React, { Component } from 'react';
import './App.css';
import './wave.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "ZeroTwo",
        bio: "A killer girl monster code name 002",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5935008.jpg&f=1&nofb=1&ipt=bd2fd593bed26ecee27846342b764bba9c5aa8b58375e0f9839db82e7e14e30f&ipo=images",
        profession: "Monster killer"
      },
      show: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <>
        <div className="app-container">
          <button onClick={this.toggleShow}>Toggle Profile</button>
          {show && (
            <div className="profile-container">
              <div className="profile-border">
                <img
                  className="profile-image"
                  src={person.imgSrc}
                  alt={person.fullName}
                />
                <h2>{person.fullName}</h2>
                <p>{person.bio}</p>
                <p>{person.profession}</p>
              </div>
              <p>Elapsed Time: {elapsedTime} seconds</p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
