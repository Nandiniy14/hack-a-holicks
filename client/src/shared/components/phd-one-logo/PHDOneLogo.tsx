import * as React from 'react';
import './phd-one-logo.css';
import { IPHDOneLogoProps } from "./types/IPHDOneLogoProps";

export const PHDOneLogo:React.FunctionComponent<IPHDOneLogoProps>=(props:IPHDOneLogoProps)=>{
    return (
        <div>
            <div className={`phd-logo__title phd-one ${props.size === 'large'?'large':''}`}>
                <span className="title-text"> User </span>
            </div>
        </div>
    )
};