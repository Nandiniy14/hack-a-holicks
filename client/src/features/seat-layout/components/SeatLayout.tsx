import * as React from 'react';
import { Desk } from '../../../shared/components/desk/desk';
import { ISeatDetails } from './types/ISeatDetails';

export class SeatLayout extends React.PureComponent<ISeatLayoutProps> {

    render() {
        const threeDeskGroups: ISeatDetails[][][] = [];
        for (var i = 0; i < this.props.deskGroups.length; i += 3) {
            threeDeskGroups.push([this.props.deskGroups[i], this.props.deskGroups[i + 1] ? this.props.deskGroups[i + 1] : [], this.props.deskGroups[i + 2] ? this.props.deskGroups[i + 2] : []]);
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

