import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {resetError } from 'actions/index.js';
import Routes from './routes/index.js'


@connect( (state, ownProps)=> {
  return {
    projectList: state.projectList
  }
}, (dispatch) => {
  return {
    resetError: bindActionCreators(resetError, dispatch)
  }
})

@withRouter
export default class APP extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <Routes />
      </div>
    )
  }
}