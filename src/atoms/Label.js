import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
    return (
        <label style={props.style} className={props.className}>{props.text}</label>
    )
};

Label.propTypes = {
    text: PropTypes.string.isRequired
};

export { Label };