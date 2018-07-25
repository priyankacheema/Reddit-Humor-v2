import { connect } from 'react-redux'
import Buttons from './buttons'
import { setCurrentIndex, setNsfw, increaseLikes } from '../../actions/humor'

const mapDispatchToProps = dispatch => {
  return {
    previous: id => dispatch(setCurrentIndex(id)),
    next: id => dispatch(setCurrentIndex(id)),
    nsfw: id => dispatch(setNsfw(id)),
    like: id => dispatch(increaseLikes(id))
  }
}

const mapStateToProps = state => {
  return {
    current: state.humor.current,
    image: state.humor.images[state.humor.current]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons)
