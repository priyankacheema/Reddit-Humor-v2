import Display from './display';
import { getHumor } from '../../actions/humor';
import { connect } from 'react-redux';

const mapStateToProps = ({humor}) => {
  return {
    images: humor.images,
    likes: humor.likes,
    nsfw: humor.nsfw,
    gifDuration: humor.gifDuration,
    current: humor.current
  }
}

export default connect(mapStateToProps, { getHumor })(Display);