import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/connectedButtons';
import DisplayImage from '../DisplayImage/connectedDisplayImage';

class Display extends Component {


    componentDidMount() {
        this.getHumorEvery(1000)
    }

    render() {
        return (
            <section className="display">
                <Buttons/>
                <DisplayImage/>
            </section>
        )
    }

    getHumorEvery = (ms) => {

        this.props.getHumor()
        setInterval(() => {

            this.props.getHumor()

        }, ms)

    }

}

Display.propTypes = {
    getHumor: PropTypes.func.isRequired
}

export default Display;