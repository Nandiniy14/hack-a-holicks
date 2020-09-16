import * as React from 'react';
import './phd-two-logo.css';
import { IPHDTwoLogoProps } from "./types/IPHDTwoLogoProps";

export const PHDTwoLogo: React.FunctionComponent<IPHDTwoLogoProps> = (props:IPHDTwoLogoProps)=>{
    return (
        <div>
            <div className={`phd-logo__title phd-two ${props.size === 'large'?'large':''}`}>
                <span className="title-text"> Admin </span>
            </div>
        </div>
    )
};