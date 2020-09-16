import * as React from 'react';
import { INavButtonProps } from './types/INavButtonProps';

export const NavButton: React.FunctionComponent<INavButtonProps> = (props: INavButtonProps) => {
    return (
        <button className={`nav-button ${props.className}`} onClick={props.onClick}>
            {props.buttonText}
        </button>
    )
}