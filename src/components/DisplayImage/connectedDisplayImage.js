import DisplayImage from './displayImage';
import { connect } from 'react-redux';
import { setCurrentIndex } from '../../actions/humor';

const mapStateToProps = ({humor}) => {
  return {
    images: humor.images,
    current: humor.current,
    nsfw: humor.nsfw
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    next: (index) => dispatch(setCurrentIndex(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayImage);