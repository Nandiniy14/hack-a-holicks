import React from "react";
import { ISeatProps } from "./types/ISeatProps";
import './seat.scss';

export class Seat extends React.PureComponent<ISeatProps, {}> {
    static defaultProps = {
        isSelected: false,
    };

    handleClick = () => {
        !this.props.isReserved && this.props.selectSeat(this.props.seatID);
    };

    render() {
        const {
            isSelected,
            tooltip,
            isEnabled,
            isReserved,
            orientation,
            style,
        } = this.props;
        const className =
            "seat" +
            (isSelected ? " seat--selected" : "") +
            (!isSelected && isEnabled && !isReserved ? " seat--enabled" : "") +
            (isReserved ? " seat--reserved" : "") +
            ` seat--${!orientation ? "north" : orientation}`;
        return (
            <div data-tip={tooltip} className={className} onClick={this.handleClick} title={tooltip} style={style}>
                <span className="seat__number">{this.props.seatNumber}</span>
            </div>
        );
    }
}