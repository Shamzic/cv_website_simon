import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education'
import Experience from './experience'
import Skills from './skills'

export default class Resume extends Component{
  render() {
    return (
      <div className="resume-body">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'Center'}}>
              <img
                className="resume-avatar"
                src="/regardloin.png"
                alt="avatar"
              />
            </div>
            <h2 style={{padding: '1em'}}>Simon Hamery</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #E48728', width: '50%'}}/>
            <div style={{textAlign: 'justify'}}>
              <p>
                I am a french computer scientist. I have studied in 5 different universities and learned how to learn. I can now program and learn any other new technology.
              </p>
              <p>
                My main goals are to become 100% free, create my own company, and travel all over the world.
              </p>
              <p>
                I love biking, you can acces to my Strava profile on the home page. I also love playing the piano and making and editing videos. There is also a link to my YouTube channel on the home page.
              </p>
              <p>
                It would be a pleasure to speak with you if you want to know more about me. You can easily get all the informations to contact me on the contact page.
                In the meantime you can see my resume and download my full CV on this page. Tadam ! (-:
              </p>
            </div>
            <hr style={{borderTop: '3px solid #E48728', width: '50%'}}/>
            <h5>Phone</h5>
            <p>+33604143933</p>
            <h5>Email</h5>
            <p>shamery@free.fr</p>
            <h5>Web</h5>
            <p>shamzic.github.io</p>
            <hr style={{borderTop: '3px solid #E48728', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2> Education </h2>
            <Education
              startYear={"Sept 2018"}
              endYear={"Dec 2018"}
              schoolName={"University of Chicoutimi, Canada"}
              schoolDescription={"Exchange program during the second year of my Master's degree in computer science"}
            />
            <Education
              startYear={"2017"}
              endYear={"2018"}
              schoolName={"University of Montpellier, France"}
              schoolDescription={"First year of Master's degree in computer science"}
            />
            <Education
              startYear={"2015"}
              endYear={"2017"}
              schoolName={"University of Strasbourg, France"}
              schoolDescription={"Bachelor degree in computer science"}
            />
            <Education
              startYear={"2014"}
              endYear={"2015"}
              schoolName={"University of Le Mans, France"}
              schoolDescription={"DEUG (second year degree) in acoustic physics"}
            />
            <Education
              startYear={"2013"}
              endYear={"2014"}
              schoolName={"University of Mulhouse, France"}
              schoolDescription={"First college year in mathematics and computer science"}
            />
            <Education
              startYear={"2010"}
              endYear={"2013"}
              schoolName={"High School Montaigne, France"}
              schoolDescription={"A-Level in science"}
            />
            <hr style={{borderTop: '3px solid #472755'}}/>
            <h2> Experience </h2>
              <Experience
                startYear={"Sep 2017"}
                endYear={"Now"}
                jobName={"Freelance bike messenger"}
                jobDescription={"I deliver packages and food by bike for different partners in Montpellier"}
              />
            <Experience
              startYear={"June 2017"}
              endYear={"July 2017"}
              jobName={"Trainee at the Franco-German Research Institute of Saint-Louis"}
              jobDescription={"Modules and interfaces programming for active imaging binoculars. Improved C++ and matlab programming language skills. Used Qt Creator, Matlab and Arduino Integrated Development Environments."}
            />
            <Experience
              startYear={"June 2016"}
              endYear={"July 2016"}
              jobName={"Trainee at the ICUBE Research Laboratory of Illkirch-Graffenstaden"}
              jobDescription={"Creation of a web dashboard in real time relation with the IoT-LAB platform. Improved python, C++ and web programming language skillsUsed web Frameworks and Arduino Integrated Development Environments."}
            />
            <hr style={{borderTop: '3px solid #472755'}}/>
            <h2>Skills</h2>
            <Skills skills="Java" progress={80}/>
            <Skills skills="HTML/CSS" progress={80}/>
            <Skills skills="Javascript" progress={50}/>
            <Skills skills="React" progress={50}/>
            <Skills skills="C++" progress={48}/>
            <Skills skills="SQL" progress={40}/>
            <Skills skills="Dart" progress={40}/>
            <Skills skills="PHP" progress={30}/>
            <hr style={{borderTop: '3px solid #472755'}}/>
            <a style={{ color: 'white', fontWeight: 'bold', fontSize: '1em', textAlign: 'center'}} href="./cv_simon_hamery.pdf" download="cv_simon_hamery">Download my full CV here</a>

          </Cell>
        </Grid>
    </div>
    )
  }
}
