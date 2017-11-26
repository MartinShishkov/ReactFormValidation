import React from "react";
import PropTypes from "prop-types";

const TextBox = (props) => {
    return (
        <input type={props.type || "text"} name={props.name} value={props.value} 
            onChange={props.onChange} className={props.className}
            placeholder={props.placeholder} style={props.style}/>
    );
};

TextBox.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string
};

export { TextBox };