import React, { Component } from 'react';
import Project from './project'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

export default class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0) { {/* WEB */}
      return (
        <div className="projects-grid" style={{textAlign: 'center'}}>

          {/* Project 0 */}
          <Project
            projectImageLink="/lcm_presentation.png"
            projectTitle="ReactJS Project : Les Coursiers MTP"
            projectDescription="Presentation website of the bike messenger association Les Coursiers Montpelliérains (LCM), realized with the ReactJS framework. Paralax, materializecss. Redirection to a Coopcycle instance for food delivery."
            titleColor="black"
            textColor="white"
            backColor="#222222"
            projectGithubLink="https://github.com/Shamzic/les-coursiers-montpellierains"
            projectLiveDemoLink="https://coursiers-montpellier.fr">
          </Project>


          <Project
            projectImageLink="/FitPlanner/imageProject.png"
            projectTitle="ReactJS Project : FitPlanner"
            projectDescription="FitPlanner is a musculation website based on ReactJS and GraphQL Technologies.
                                You can create personnal programs and trainings adapted to you. Click on a muscle and add an exercise
                                associated to your program."
            titleColor="black"
            textColor="white"
            backColor="#222222"
            projectGithubLink="https://github.com/Shamzic/FitPlannerWeb"
            projectLiveDemoLink="">
          </Project>

          {/* Project 1 */}
          <Project
            projectImageLink="/Pradeoscopemanager/pradeoscopemanager.png"
            projectTitle="VueJS Project : Pradeoscope Manager"
            projectDescription="Pradeoscopemanager is a sharing multiplateform application. The user can send messages and images to the application and every user connected to the web app or the phone app (IOs or Android) will see the message and can post a like on it"
            titleColor="black"
            textColor="white"
            backColor="#222222"
            projectGithubLink="https://github.com/Shamzic/pradeoscopemanager"
            projectLiveDemoLink="https://pradeoscope.firebaseapp.com/">
          </Project>

          {/* Project 2 */}
          <Project
            projectImageLink="/eurekart/eurekart.png"
            projectDescription="Eurekart is a web platform where user can search or offer thier services in the fields of art and cultur.
            Thanks to a map, they can pick up and offer with the exact location and then meet people in real life. This project was done in 40 hours during a Hackathon at Saguenay in Canada."
            projectTitle="ReactJS Project : Eurekart"
            titleColor="black"
            textColor="white"
            backColor="#222222"
            projectGithubLink="https://github.com/TanguyHardelin/Hackaton-2018"
            projectLiveDemoLink="https://hackton-2018.firebaseapp.com">
          </Project>

  </div>
      )
    }  else if(this.state.activeTab === 1) {
      return(
        <div className="projects-grid">
          <Project
            projectImageLink="/tez.png"
            projectTitle="Unity 3D video game : the legacy of Tez"
            projectDescription="3D game realised on the Unity game engine at the University of Chicoutimi during a video game master's dregree project.
              Procedural generation, building mode, open world, fight mode, exploration."
            titleColor="black"
            textColor="white"
            backColor="#222222"
            projectGithubLink="https://github.com/TanguyHardelin/The_legacy_of_Tez"
            projectLiveDemoLink="">
          </Project>

          <Project
            projectImageLink="/mockup_dwarfiltration.jpg"
            projectTitle="Unity 2D video game : Dwarfiltration"
            projectDescription="Puzzle game in agrement with the global theme : transmission. The main goal is to reach the depth of the mine where a treasure is waiting for you. In order to fulfill this mission, you will incarnate two dwarfs who will need to cooperate. Our constraint was : << All sounds for your game must be created using your voice or body. >>"
            titleColor="black"
            textColor="white"
            backColor="#222222"
            projectGithubLink="https://globalgamejam.org/2018/games/dwarfiltration"
            projectLiveDemoLink="">
          </Project>

        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web projects</Tab>
          <Tab>Video Games projects</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
    </div>
    )
  }
}
