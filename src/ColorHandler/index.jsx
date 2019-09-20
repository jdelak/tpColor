import React, { Component } from 'react';
import ColorMapper from './ColorMapper';
import ColorBlock from './ColorMapper/ColorBlock';
import { colors, getCssClassFromValue } from './constants';

export default class ColorHandler extends Component {
    constructor(){
        super();
        this.state = {currentColorValue:colors[0].value}
    }

    setCurrentColorValue = (currentColorValue) =>{
         this.setState({currentColorValue})
    }

    render() {
        const {currentColorValue} = this.state;
        const {setCurrentColorValue} = this;
        return(
            <div className="container">
                <ColorMapper onClick={setCurrentColorValue}/>
                <ColorBlock className={getCssClassFromValue(currentColorValue)} value={currentColorValue} onClick={()=> console.log(currentColorValue)}/>
            </div>
        )
    }
}
