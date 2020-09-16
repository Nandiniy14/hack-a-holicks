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
            ` seat--${!orientation ? "north" : orientation}`;

        let statusIndicatorClassName = 'seat__status-indicator';

        if (orientation) {
            statusIndicatorClassName += ` seat__status-indicator--${orientation}`;
        } else {
            statusIndicatorClassName += ` seat__status-indicator--north`;
        }

        if (isSelected) {
            statusIndicatorClassName += ` seat__status-indicator--selected`;
        } else if (isReserved) {
            statusIndicatorClassName += ` seat__status-indicator--reserved`;
        } else {
            if (isEnabled) {
                statusIndicatorClassName += ' seat__status-indicator--enabled';
            } else {
                statusIndicatorClassName += ' seat__status-indicator--disabled';
            }
        }

        return (
            <div data-tip={tooltip} className={className} onClick={this.handleClick} title={tooltip} style={style}>
                <div className={statusIndicatorClassName} />
            </div>
        );
    }
}