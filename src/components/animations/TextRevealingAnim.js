import React from "react";
import PropTypes from 'prop-types';
import '../../css/animations/textRevealing.css'

class TextRevealingAnim extends React.Component {
    static propTypes = {
        startedWord: PropTypes.string.isRequired,
        animText: PropTypes.string.isRequired,
        fontSize: PropTypes.string,
        color: PropTypes.string,
        textMarginLeft: PropTypes.string,
    }

    static defaultPropTypes = {
        fontSize: '32px',
        color: '#555',
        textMarginLeft: '-335px'
    }

    render() {
        const {
            startedWord,
            animText,
            fontSize,
            color,
        } = this.props;

        return (
            <div className="textRevealingContent" style={{fontSize: fontSize, color: color}}>
                <div className="startWord">{startedWord}</div>
                <div className="animText">
                    <span> &nbsp;{ animText}</span>
                </div>
            </div>
        )
    }
}

export default TextRevealingAnim;