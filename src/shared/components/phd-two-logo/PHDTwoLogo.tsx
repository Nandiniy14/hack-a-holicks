import * as React from 'react';
import './phd-two-logo.css';
import { IPHDTwoLogoProps } from "./types/IPHDTwoLogoProps";

export const PHDTwoLogo: React.FunctionComponent<IPHDTwoLogoProps> = (props:IPHDTwoLogoProps)=>{
    return (
        <div>
            <div className={`phd-logo__title phd-two ${props.size === 'large'?'large':''}`}>
                <span className="title-closures">&lt;</span>
                <span className="title-text"> phd </span>
                <span className="title-closures">/><sup  className="title-super-script">2.0</sup></span>
            </div>
            <div className={`phd-logo__caption phd-two ${props.size === 'large'?'large':''}`}>
                <span className="caption-closures">/* </span>
                <span className="caption-text">PPM HACK DAY </span>
                <span className="caption-year">2019</span>
                <span className="caption-closures"> */</span>
            </div>
        </div>
    )
};