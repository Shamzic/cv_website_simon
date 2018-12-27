  import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content    } from 'react-mdl';
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
            <Header title="Title" scroll>
              <Navigation>
                  <a href="/Landing">Landing</a>
                  <a href="/Resume">Resume</a>
                  <a href="/About">About</a>
                  <a href="/Contact">Contact</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/Landing">Landing</a>
                <a href="/Resume">Resume</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
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
