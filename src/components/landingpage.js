import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component{
  render() {
    return (
      <div className="landing-div" style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/simon.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1> Full Stack Web & Mobile Developper </h1>
              <hr/>
              <p> Javascript | React | HTML/CSS | Bootstrap | Java | C++ </p>
              <div className="social-links">

                {/* LinkedIn*/}
                <a href="https://www.linkedin.com/in/hamery-simon-73ba9389/"  rel="noopener noreferrer"  target="_blank">
                  <i className="fab fa-linkedin"aria-hidden="true"/>
                </a>

                {/* Github*/}
                <a href="https://github.com/Shamzic/"  rel="noopener noreferrer"  target="_blank">
                  <i className="fab fa-github-square"aria-hidden="true"/>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/shaamzic/?hl=fr"  rel="noopener noreferrer"  target="_blank">
                  <i className="fab fa-instagram" aria-hidden="true"/>
                </a>

                {/* Youtube*/}
                <a href="https://youtube.com/Shamzic/"  rel="noopener noreferrer"  target="_blank">
                  <i className="fab fa-youtube-square" aria-hidden="true"/>
                </a>

                {/* Strava */}
                <a href="https://www.strava.com/athletes/16474919"  rel="noopener noreferrer"  target="_blank">
                  <i className="fab fa-strava" aria-hidden="true"/>
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
