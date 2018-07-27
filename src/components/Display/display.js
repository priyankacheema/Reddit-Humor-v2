import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/connectedButtons';
import DisplayImage from '../DisplayImage/connectedDisplayImage';
import getGifDuration from '../../utils/gifDuration'
import {getNextIndex} from '../../utils/getNextIndex'

class Display extends Component {


    async componentDidMount() {

        await this.getHumorEvery(3600000)

    }

    componentDidUpdate() {

        this.timeoutId !== undefined && clearInterval(this.timeoutId)
        this.timeoutId = this.updateIndexEvery(20000)

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

    updateIndexEvery = (ms) => {

        const  {images, current, setCurrentIndex} = this.props
        const image = images[current]

        const time = image.gif ? getGifDuration(image.url) + ms : ms

        return setTimeout(() => {

            const nextIndex = getNextIndex(images, current)
            setCurrentIndex(nextIndex)

        }, time)

    }
}

Display.propTypes = {

    getHumor: PropTypes.func.isRequired,
    current: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    setCurrentIndex: PropTypes.func.isRequired

}

export default Display;