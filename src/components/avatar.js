import React from 'react';
import classes from '../stories/button.css';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';


// const avatar = (props) => {
export default function Avatar({ avatar : { type, className, text, width} }) {
    return (
        <div className='wrapper'>
            <FontAwesomeIcon  icon={faBell} />
            <button
                type={type || "button"}
                className={`${classes.button} ${className}`}
                style={{width: `${width}`}}
                >
                <span className={classes.button__text}>{text}</span>
            </button>
        </div>
    );
}

// export default avatar;
Avatar.propTypes = {
  /** Composition of the task */
  avatar: PropTypes.shape({
    /** Id of the task */
    type: PropTypes.string.isRequired,
    /** Title of the task */
    className: PropTypes.string.isRequired,
    /** Current state of the task */
    text: PropTypes.string.isRequired,
  })
};