  import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to='/'>MyPortfolio</Link>} className="header-color" scroll>
              <Navigation>
                  <Link to="/"> <div className="effect-underline">Home</div></Link>
                  <Link to="/resume"><div className="effect-underline">Resume</div></Link>
                  <Link to="/projects"><div className="effect-underline">Projects</div></Link>
                  {/*<Link to="/aboutme"><div className="effect-underline">About Me</div></Link>*/}
                  <Link to="/contact"><div className="effect-underline">Contact</div></Link>
              </Navigation>
            </Header>
            <Drawer title="Menu">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                {/*<Link to="/aboutme">About</Link>*/}
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main/>
            </Content>
          </Layout>
        </div>

      </div>
    );
  }
}

export default App;
