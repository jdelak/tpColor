import React from 'react';
import PropTypes from 'prop-types';
import ColorBlock from './ColorBlock';

import {colors} from '../constants'


const ColorMapper = ({ onClick }) => (
    <div>
        {colors.map(({value, cssClass })=> {
            return(
                <ColorBlock value={value} className={cssClass} onClick={()=> onClick(value)}/>
                )
            }
        )}
    </div>
)

export default ColorMapper;

ColorMapper.propTypes = {
    onClick:PropTypes.func.isRequired
}