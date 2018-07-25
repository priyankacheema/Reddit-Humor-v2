import DisplayImage from './displayImage';
import { connect } from 'react-redux';

const mapStateToProps = ({humor}) => {
  return {
    images: humor.images,
    current: humor.current
  }
}

export default connect(mapStateToProps)(DisplayImage);