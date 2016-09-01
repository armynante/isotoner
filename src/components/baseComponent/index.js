import React, { Component, PropTypes } from 'react'
if(process.env.WEBPACK) require('./index.scss');

class baseComponent extends Component {
  render() {
    const { items } = this.props
    return (
      <div>
        <ul>
          { items.map((item) => {
              return (
                <li>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}


baseComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(PropTypes.numder)).isRequired
}

export default baseComponent
