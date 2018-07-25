import Display from './display';
import { getHumor } from '../../actions/humor';
import { connect } from 'react-redux';

export default connect(null, { getHumor })(Display);