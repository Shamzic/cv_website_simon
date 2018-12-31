import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

export default class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
        {/* Project 1*/}
        <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #1</CardTitle>
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
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #2</CardTitle>
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
      <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #3</CardTitle>
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

  {/* Project 4*/}
  <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>React Project #4</CardTitle>
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
    } else if(this.state.activeTab === 1) { {/* JAVASCRIPT */}
      return(
        <div className="projects-grid">
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

      {/* Project 4*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>Javascript Project #4</CardTitle>
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
      {/* Project 5*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>Javascript Project #5</CardTitle>
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
      {/* Project 6*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*TWVs8hNCI7B7t2Y4tA-u1A.png) center / cover' }}>Javascript Project #6</CardTitle>
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

      {/* Project 4*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2016/11/27173033/Curso-Online-de-Orienta%C3%A7%C3%A3o-a-Objetos-com-Java-principal-1.png) center / cover' }}>Javascript Project #4</CardTitle>
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

      {/* Project 5*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2016/11/27173033/Curso-Online-de-Orienta%C3%A7%C3%A3o-a-Objetos-com-Java-principal-1.png)  center / cover' }}>Javascript Project #5</CardTitle>
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
      {/* Project 6*/}
      <Card className="projects-card" shadow={5} style={{minWidth: '350px'}}>
              <CardTitle style={{color: 'black', height: '176px', background: 'url(https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2016/11/27173033/Curso-Online-de-Orienta%C3%A7%C3%A3o-a-Objetos-com-Java-principal-1.png)  center / cover' }}>Javascript Project #6</CardTitle>
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
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>Java</Tab>
          <Tab>C++</Tab>
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
