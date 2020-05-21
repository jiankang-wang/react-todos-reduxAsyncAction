import { connect } from 'react-redux'
import { setFilter } from '../action/index'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
  filter: state.filter
})

const mapDisplatchToProps = (dispatch) => ({
  setFilter: filter => dispatch(setFilter(filter))
})

export default connect(mapStateToProps, mapDisplatchToProps)(Footer)