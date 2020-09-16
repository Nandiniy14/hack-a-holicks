import * as React from 'react';
import { Desk } from '../../../shared/components/desk/desk';
import { ISeatDetails } from './types/ISeatDetails';

export class SeatLayout extends React.PureComponent<ISeatLayoutProps> {
    deskGroups: any[][] = [[
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
    ], [
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
        }
    ], [
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
    ], [
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
    ], [
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
    ], [
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
    ], [
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
    ]];

    render() {
        const threeDeskGroups: ISeatDetails[][][] = [];
        for (var i = 0; i < this.deskGroups.length; i += 3) {
            threeDeskGroups.push([this.deskGroups[i], this.deskGroups[i + 1] ? this.deskGroups[i + 1] : [], this.deskGroups[i + 2] ? this.deskGroups[i + 2] : []]);
        }
        return (
            <>
                {threeDeskGroups.map(group => (
                    <div className='desk-group'>
                        <Desk seats={group[0]} onSeatSelect={this.props.onSeatSelection} selectedSeatID={this.props.selectedSeatID} />
                        <Desk seats={group[1]} onSeatSelect={this.props.onSeatSelection} selectedSeatID={this.props.selectedSeatID} />
                        <Desk seats={group[1]} onSeatSelect={this.props.onSeatSelection} selectedSeatID={this.props.selectedSeatID} />
                    </div>
                ))}
            </>
        )
    }
}

interface ISeatLayoutProps {
    deskGroups: ISeatDetails[][],
    selectedSeatID: string;
    onSeatSelection: (selectedSeatID: string) => void;
}

