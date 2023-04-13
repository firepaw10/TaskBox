import React from 'react';
import classes from '../stories/button.css';
import PropTypes from "prop-types";

// const avatar = (props) => {
export default function Avatar({avatar = { type, className, onClick, disabled, text, icon, width}}) {
    return (
        <div className='wrapper'>
            <button
                type={avatar.type || "button"}
                className={`${classes.button} ${avatar.className}`}
                onClick={avatar.onClick}
                disabled={avatar.disabled}
                style={{width: `${avatar.width}`}}
                >
                <span className={classes.button__text}>{avatar.text}</span>
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