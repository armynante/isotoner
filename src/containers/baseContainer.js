import { connect } from 'react-redux'
import { fetchItems } from '../actions/baseComponent.js'
import baseComponent from '../components/baseComponent/index.js';



function mapStateToProps(state) {
  return {
    items: state.base.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: (term) => {
      dispatch(fetchItems(term))
    }
  }
}

const base = connect(
  mapStateToProps,
  mapDispatchToProps
)(baseComponent)


export default base
