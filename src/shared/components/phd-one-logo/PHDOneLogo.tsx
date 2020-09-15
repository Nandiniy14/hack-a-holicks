import * as React from 'react';
import './phd-one-logo.css';
import { IPHDOneLogoProps } from "./types/IPHDOneLogoProps";

export const PHDOneLogo:React.FunctionComponent<IPHDOneLogoProps>=(props:IPHDOneLogoProps)=>{
    return (
        <div>
            <div className={`phd-logo__title phd-one ${props.size === 'large'?'large':''}`}>
                <span className="title-closures">&lt;</span>
                <span className="title-text"> phd </span>
                <span className="title-closures">/><sup  className="title-super-script">1.0</sup></span>
            </div>
            <div className={`phd-logo__caption phd-one ${props.size === 'large'?'large':''}`}>
                <span className="caption-closures">/* </span>
                <span className="caption-text">PPM HACK DAY </span>
                <span className="caption-year">2018</span>
                <span className="caption-closures"> */</span>
            </div>
        </div>
    )
};