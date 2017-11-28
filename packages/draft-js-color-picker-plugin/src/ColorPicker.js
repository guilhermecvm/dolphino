import React from 'react'
import PropTypes from 'prop-types'
import { colors as DEFAULT_COLORS } from './colors'

const style = {
  box: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  color: {
    height: '2rem',
    flex: '1 0 11%',
    cursor: 'pointer',
    margin: '.1rem',
    borderRadius: '2px',
  },
}

const ColorPicker = ({ colors, onSelect }) => (
  <div style={style.box}>
    <span
      style={{
        ...style.color,
        backgroundColor: '#000',
        borderColor: '#000',
      }}
      key="automatic"
      onClick={() => onSelect(null)}
    />
    {colors.map((c, i) => (
      <span
        style={{
          ...style.color,
          backgroundColor: c,
          borderColor: c,
        }}
        key={i}
        onClick={() => onSelect(c)}
      />
    ))}
  </div>
)

ColorPicker.propTypes = {
  onSelect: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
}
ColorPicker.defaultProps = {
  colors: DEFAULT_COLORS,
}

export default ColorPicker
