import React from "react"
import PropTypes from "prop-types"

const Hello = (props) => {
  return (
    <React.Fragment>
      Hello World! { props.timestamp }
    </React.Fragment>
  )
}

Hello.propTypes = {
  timestamp: PropTypes.string
};

export default Hello
