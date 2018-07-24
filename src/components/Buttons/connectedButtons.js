import React from 'react';
import { connect } from 'react-redux';
import Buttons from './buttons';

import * as Actions from '../../actions/humor';

export default connect(null, { ...Actions })(Buttons);