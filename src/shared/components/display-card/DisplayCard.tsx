import * as React from 'react';
import { IDisplayCardProps } from './types/IDisplayCardProps';
import './display-card.css';

export const DisplayCard: React.FunctionComponent<IDisplayCardProps> = (props: IDisplayCardProps) => {
    return (
        <div className="display-card">
            <div className="display-card__title">
                {props.title}
            </div>
            <div className="display-card__value">
                {props.value}
            </div>
        </div>
    )
}