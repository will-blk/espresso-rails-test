import React from "react"
import PropTypes from "prop-types"

const Hello = (props) => {
  return (
    <React.Fragment>
      Greeting: {props.greeting}
    </React.Fragment>
  )
}

Hello.propTypes = {
  greeting: PropTypes.string
};

export default Hello
