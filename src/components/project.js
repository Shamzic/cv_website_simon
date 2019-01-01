import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl'

export default class Project extends Component{
  render() {

    var demoLink = null;
    if(this.props.projectLiveDemoLink != "") {
      demoLink = <Button href={this.props.projectLiveDemoLink} colored target="_blank">LiveDemo</Button>
    }

    return (
      <Card className="projects-card" shadow={5} style={{minWidth: '350px', fontFamily: 'Oxygen'}}>
        <h6 style={{margin: '1%',fontFamily: 'Oxygen', fontWeight: 'bold', marginLeft: '4%'}}>{this.props.projectTitle}</h6>
        <img src={this.props.projectImageLink} style={{width: '90%', marginLeft:'5%',marginBottom:'5%', color: this.props.titleColor, height: '176px' }} ></img>
        <CardText style={{textAlign: 'justify', color: this.props.textColor, backgroundColor: this.props.backColor, margin: 'auto', height: '40%'}}>
          {this.props.projectDescription}
        </CardText>
        <CardActions border style={{marginLeft: '0'}}>
            <Button href={this.props.projectGithubLink} colored target="_blank">Github</Button>
            {demoLink}
        </CardActions>
        <CardMenu style={{color: '#ffff'}}>
        </CardMenu>
    </Card>
    )
  }
}
