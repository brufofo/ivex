import React from 'react'
import PropTypes from 'prop-types'

const Colors = ({ setColorScheme }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select onChange={(e) => setColorScheme(e.target.value)}>
        <option value="nivo">default</option>
        <option value="blue_green">blue_green</option>
        <option value="blue_purple">blue_purple</option>
        <option value="purple_red">purple_red</option>
        <option value="yellow_orange_red">yellow_orange_red</option>
      </select>
    </div>
  )
}
Colors.propTypes = {
  setColorScheme: PropTypes.func
}
export default Colors
