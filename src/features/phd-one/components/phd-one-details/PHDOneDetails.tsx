import * as React from 'react';
import { IPHDOneDetailsProps } from './types/IPHDOneDetailsProps';
import { PHDOneLogo } from '../../../../shared/components/phd-one-logo/PHDOneLogo';
import { isEmpty, get } from 'lodash';
import './phd-one-details.css';
import { DisplayCard } from '../../../../shared/components/display-card/DisplayCard';

export class PHDOneDetails extends React.PureComponent<IPHDOneDetailsProps, {}> {

    public componentDidMount() {
        this.checkEventDataIfEmpty();
    }

    public render() {
        const winners: string[] = get(this.props.eventData, 'winners', []);
        const runners: string[] = get(this.props.eventData, 'runners', []);
        return (
            <div className="phd-one-details">
                <div className="main-head">
                    <PHDOneLogo size="large" />
                </div>
                <div className="container ">
                    <div className="container__left">
                        <DisplayCard title="Hours" value={this.props.eventData.hours} />
                        <DisplayCard title="Ideas" value={this.props.eventData.ideas} />
                        <DisplayCard title="Participants" value={this.props.eventData.participants} />
                        <DisplayCard title="Teams" value={this.props.eventData.teams} />
                    </div>
                    <div className="container__right">
                        <div className="winners">
                            <h1>Winners</h1>
                            <ul>
                                {winners.map((value: string) => {
                                    return <li>{value}</li>
                                })}
                            </ul>
                        </div>
                        <div className="runners">
                            <h1>Runners</h1>
                            <ul>
                                {runners.map((value: string) => {
                                    return <li>{value}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="details">
                </div>
            </div>
        );
    }

    /**
     * Function to fetch the event Data
     */
    private checkEventDataIfEmpty = () => {
        if (isEmpty(this.props.eventData)) {
            this.props.fetchPHDOneDetails();
        }
    }
}