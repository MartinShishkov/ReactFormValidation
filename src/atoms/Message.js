import React from "react";
import PropTypes from "prop-types";

const Message = (props) => {
    return (
        <span style={{display: "block", color: props.color}}>
            {props.text}
        </span>
    );
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export { Message };