import * as React from 'react';
import { Desk } from '../../../shared/components/desk/desk';
import { Seat } from '../../../shared/components/seat/seat';
import { ISeatDetails } from './types/ISeatDetails';

export class SeatLayout extends React.PureComponent {
    seats: ISeatDetails[] = [
        // {
        //     id: '1',
        //     isEnabled: true,
        //     isReserved: false,
        //     isSelected: false,
        // },
        // {
        //     id: '2',
        //     isEnabled: false,
        //     isReserved: false,
        //     isSelected: false,
        // },
        // {
        //     id: '3',
        //     isEnabled: true,
        //     isReserved: true,
        //     isSelected: false,
        // },
        // {
        //     id: '4',
        //     isEnabled: true,
        //     isReserved: false,
        //     isSelected: true,
        // },
        // {
        //     id: '5',
        //     isEnabled: true,
        //     isReserved: false,
        //     isSelected: false,
        // },
        // {
        //     id: '6',
        //     isEnabled: true,
        //     isReserved: false,
        //     isSelected: false,
        // }
    ]
    render() {
        return (
            <>
                <Desk seats={this.seats} onSeatSelect={() => { return }} selectedSeatID={'1'} />
                <Desk seats={this.seats} onSeatSelect={() => { return }} selectedSeatID={'1'} />
                <Desk seats={this.seats} onSeatSelect={() => { return }} selectedSeatID={'1'} />
                <Desk seats={this.seats} onSeatSelect={() => { return }} selectedSeatID={'1'} />
            </>
        )
    }
}

interface ISeatLayoutProps {
    seats: ISeatDetails[]
}

