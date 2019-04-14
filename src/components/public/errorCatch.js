import React, { Component} from 'react'

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
    this.state={
      error: false
    }
  }

  componentDidCatch(error, info){
    this.setState({
      error,
      info
    })
  }

  render(){
    const styleProps = {
      marginTop: '80px',
      textAlign: 'center', 
      fontSize: '16px', 
      color: '#666',
    }

    if(this.state.error) {
      return (
        <div style={styleProps}>
          { this.state.error.toString() || '抱歉，网页出现异常啦...' } 
        </div>
      )
    }

    return this.props.children
    
  }
}