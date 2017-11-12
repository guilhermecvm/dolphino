import React, { Component } from 'react'

export default MyComponent =>
  class WindowClickClose extends Component {
    componentDidMount() {
      setTimeout(() => {
        window.addEventListener('click', this.onWindowClick)
      })
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.onWindowClick)
    }

    onWindowClick = () => this.props.onOverrideContent(undefined)

    onMouseDown = event => event.preventDefault()

    render() {
      return (
        <div onMouseDown={this.onMouseDown}>
          <MyComponent {...this.props} />
        </div>
      )
    }
  }
