import * as React from 'react';
import { Desk } from '../../../shared/components/desk/desk';
import { Seat } from '../../../shared/components/seat/seat';
import { ISeatDetails } from './types/ISeatDetails';

export class SeatLayout extends React.PureComponent<ISeatLayoutProps> {
    seats: ISeatDetails[] = [
        {
            id: '1',
            isEnabled: true,
            isReserved: false,
            isSelected: false,
        },
        {
            id: '2',
            isEnabled: false,
            isReserved: false,
            isSelected: false,
        },
        {
            id: '3',
            isEnabled: true,
            isReserved: true,
            isSelected: false,
        },
        {
            id: '4',
            isEnabled: true,
            isReserved: false,
            isSelected: true,
        },
        {
            id: '5',
            isEnabled: true,
            isReserved: false,
            isSelected: false,
        },
        {
            id: '6',
            isEnabled: true,
            isReserved: false,
            isSelected: false,
        }
    ];

    render() {
        const twoDesksGroup: ISeatDetails[][][] = [];
        for (var i = 1; i < this.seats.length; i += 2) {
            twoDesksGroup.push([[this.seats[i]], [this.seats[i + 1]]]);
        }
        return (
            <>
                {twoDesksGroup.map(group => (
                    <div>
                        <Desk seats={group[0]} onSeatSelect={() => { return }} selectedSeatID={'1'} />
                        <Desk seats={group[1]} onSeatSelect={() => { return }} selectedSeatID={'1'} />
                    </div>
                ))}
            </>
        )
    }
}

interface ISeatLayoutProps {
    seats: ISeatDetails[],
    onSeatSelection: (selectedSeatID: string) => void;
}

