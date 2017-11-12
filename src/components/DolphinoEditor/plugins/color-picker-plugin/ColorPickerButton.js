import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ColorPicker from './ColorPicker'
import withToolbarContent from '../withWindowClickClose'

export default class ColorPickerButton extends Component {
  handleMouseDown = e => e.preventDefault()

  handleClick = e => {
    e.preventDefault()
    e.stopPropagation()
    const ColorPickerWindowClose = withToolbarContent(ColorPicker)
    const content = props => (
      <ColorPickerWindowClose {...props} onSelect={this.handleSelect} />
    )
    this.props.onOverrideContent(content)
  }

  handleSelect = color => {
    this.props.onSelect(color)
    this.props.onOverrideContent(undefined)
  }

  render() {
    const { theme, color } = this.props
    const className = color
      ? [theme.button, theme.active].join(' ')
      : theme.button
    const fillStyle = color && { fill: color }

    return (
      <div className={theme.buttonWrapper} onMouseDown={this.handleMouseDown}>
        <button className={className} onClick={this.handleClick} type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={fillStyle}
          >
            <path fillOpacity=".36" d="M0 20h24v4H0z" />
            <path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z" />
          </svg>
        </button>
      </div>
    )
  }
}

ColorPickerButton.propTypes = {
  getEditorState: PropTypes.func.isRequired,
  onOverrideContent: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  color: PropTypes.string,
}
