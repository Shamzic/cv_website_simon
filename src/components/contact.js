import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class Resume extends Component{
  render() {
    return (
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell coll={8} className="cell-1">
              <h2>Simon Hamery</h2>
              <img
                src="https://media.licdn.com/dms/image/C4E03AQF4CW2UHOdTig/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=S0d5ma29kon0YKY6uN6RC1l7ZhlKQ4atZcZhVeEl_xY"
                alt="avatar"
                style={{height: '25%',borderRadius: '10%'}}
              />
            <p>
              "Communication is the key of success."
            </p>
            <p>
              Contact me at anytime by phone, mail,
            </p>
            <p>Skype and Discord.</p>

            </Cell>
            <Cell coll={8} tablet={8}>
              <h2>Contact Me</h2>
              <hr></hr>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                       +33 6 04 14 39 33
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                       shamery@free.fr
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fab fa-discord" aria-hidden="true"/>
                      shamzic
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Lato'}}>
                      <i className="fab fa-skype" aria-hidden="true"/>
                       shamery_7
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
    )
  }
}
