import React, {Component } from 'react'

class  LazyLoad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      modules: null
    }
  }

  componentDidMount() {
    this._isMounted = true
    this.load(this.props)
  }

  componentDidUpdate(prev) {
    if(this.props.loadComponent !== prev.loadComponent) {
      this.load(this.props)
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  load(props) {
    this.setState({
      isLoaded: false
    })

    props.loadComponent().then(result => {
      if(!this._isMounted) return null
      this.setState({
        modules: result.default || result,
        isLoaded: true
      })
    })
  }

  render(){
    if(!this.state.isLoaded) return null

    return React.Children.only(this.props.children(this.state.modules))
  }
}

export default  function DynamicLoad(component) {
  return (props) => (
    <LazyLoad loadComponent={()=>import(`../../containers/${component}`)}>
      {(Mod) => <Mod {...props}/>}
    </LazyLoad>
  )
}

