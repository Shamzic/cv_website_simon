import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

export default class Skills extends Component{
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex'}}>
            <Cell col={2}>
              {this.props.skills}
            </Cell>
            <Cell col={10}>
              <ProgressBar
                style={{margin: 'auto', width: '75%'}}
                progress={this.props.progress}
              />
            </Cell>
          </div>
        </Cell>
      </Grid>
    )
  }
}
