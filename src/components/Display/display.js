import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/buttons';
import DisplayImage from '../DisplayImage/connectedDisplayImage';
import {getGifDuration} from '../../utils/gifDuration'
import {getNextIndex} from '../../utils/getNextIndex'
import { getHumor, setCurrentIndex } from '../../actions/humor';
import { connect } from 'react-redux';


class Display extends Component {
    
    async componentDidMount() {
        await this.getHumorEvery(3600000)
    }

    async componentDidUpdate() {
        this.timeoutId !== undefined && clearInterval(this.timeoutId)
        this.timeoutId = await this.updateIndexEvery(20000)
    }

    render() {
        return (
            <section className="display">
                <Buttons/>
                <DisplayImage/>
            </section>
        )
    }

    getHumorEvery = async (ms) => {

        await this.props.getHumor()

        return setInterval(() => {
            this.props.getHumor()

        }, ms)

    }

    updateIndexEvery = async (ms) => {
        const  {images, current, setCurrentIndex, getGifDuration} = this.props
        const image = images[current]
        const time = image.gif ? await getGifDuration(image.url) * 3 : ms

        return setTimeout(() => {
            const nextIndex = getNextIndex(images, current)
            setCurrentIndex(nextIndex)

        }, time)

    }
}

Display.defaultProps = {
    getNextIndex,
    getGifDuration
}

Display.propTypes = {

    getHumor: PropTypes.func.isRequired,
    current: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    setCurrentIndex: PropTypes.func.isRequired,
    getNextIndex: PropTypes.func.isRequired,
    getGifDuration: PropTypes.func.isRequired
}

const mapStateToProps = ({humor}) => ({images: humor.images, current: humor.current})
export default connect( mapStateToProps, { getHumor,  setCurrentIndex})(Display)
