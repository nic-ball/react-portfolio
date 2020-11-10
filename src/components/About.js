import React, { Component } from 'react';

class About extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id='about'>
        <div className = 'row'>
          <div className = 'three columns'>
            <img className = 'profile-pic' src='./images/profile.jpg' height='150' width='150' borderRadius='200/ 2' alt='nic-ball profile pic'/>
          </div>
          <div className = 'nine columns main-col'>
            <h2>About Me</h2>
            <p>
              {
                resumeData.aboutMe
              }
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About;