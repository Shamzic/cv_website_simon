import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

export default class Experience extends Component{
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <h6>{this.props.startYear} - {this.props.endYear} </h6>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop: '0px'}}>{this.props.jobName}</h5>
          <p className="jobDescription">{this.props.jobDescription}</p>
        </Cell>
      </Grid>
    )
  }
}
