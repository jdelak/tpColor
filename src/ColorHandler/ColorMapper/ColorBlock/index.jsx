import React from 'react';
import PropTypes from 'prop-types';

const ColorBlock = ({onClick,value,className})=> (
    <div className={`colorBlock ${className}`} onClick={()=>onClick(value)}>
        {value}
    </div>
)


ColorBlock.propTypes = {
    onClick:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
}

export default ColorBlock;

