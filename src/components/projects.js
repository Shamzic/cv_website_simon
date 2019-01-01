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
        <div className="projects-grid">

          {/* Project 0 */}
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
    } else if(this.state.activeTab === 1) { {/* C++ */}
      return(
        <div className="projects-grid" style={{}}>
        {/* Project 1*/}
        <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>Javascript Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#ffff'}}>
          <IconButton name="share"/>
          </CardMenu>
      </Card>

      {/* Project 2*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>Javascript Project #2</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
        <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
        <IconButton name="share"/>
        </CardMenu>
      </Card>

      {/* Project 3*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>Javascript Project #3</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
        <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
        <IconButton name="share"/>
        </CardMenu>
      </Card>
    </div>
      )
    } else if(this.state.activeTab === 2) { {/* JAVA */}
      return(
        <div className="projects-grid">
        {/* Project 1*/}
        <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2016/11/27173033/Curso-Online-de-Orienta%C3%A7%C3%A3o-a-Objetos-com-Java-principal-1.png) center / cover' }}>Java Project #1</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CardText>
          <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{color: '#ffff'}}>
          <IconButton name="share"/>
          </CardMenu>
      </Card>

      {/* Project 2*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2016/11/27173033/Curso-Online-de-Orienta%C3%A7%C3%A3o-a-Objetos-com-Java-principal-1.png) center / cover' }}>Javascript Project #2</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
        <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
        <IconButton name="share"/>
        </CardMenu>
      </Card>

      {/* Project 3*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2016/11/27173033/Curso-Online-de-Orienta%C3%A7%C3%A3o-a-Objetos-com-Java-principal-1.png) center / cover' }}>Javascript Project #3</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardText>
        <CardActions border>
            <Button colored>Github</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
        <IconButton name="share"/>
        </CardMenu>
      </Card>

    </div>
      )
    } else if(this.state.activeTab === 3) {
      return(
        <div className="projects-grid">
          {/* C ++ */}
          {/* Project 1*/}
          <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://media.licdn.com/media-proxy/ext?w=512&h=288&f=n&hash=%2BygK0I4JY0I%2BYDIjzuk9rkdb3BI%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-gUyes_dGfYX_rf8DbZLSiolsXfSoBkQQ2f-ioRTnmF469LcLmY4Yx3A)  center / cover' }}>C++ Project #1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#ffff'}}>
            <IconButton name="share"/>
            </CardMenu>
          </Card>
          {/* Project 2*/}
          <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(https://media.licdn.com/media-proxy/ext?w=512&h=288&f=n&hash=%2BygK0I4JY0I%2BYDIjzuk9rkdb3BI%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6plxVUzgUv5K_PrkC9q0RIUJDPBy-gUyes_dGfYX_rf8DbZLSiolsXfSoBkQQ2f-ioRTnmF469LcLmY4Yx3A)  center / cover' }}>Javascript Project #6</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#ffff'}}>
            <IconButton name="share"/>
            </CardMenu>
          </Card>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web</Tab>
          <Tab>Javascript</Tab>
          <Tab>Java</Tab>
          <Tab>Video Games</Tab>
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
