import Display from './display';
import { getHumor, setCurrentIndex } from '../../actions/humor';
import { connect } from 'react-redux';

const mapStateToProps = ({humor}) => ({images: humor.images, current: humor.current})
export default connect( mapStateToProps, { getHumor,  setCurrentIndex})(Display);