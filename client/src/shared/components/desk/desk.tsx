import { ceil, round, times } from 'lodash';
import React, { useEffect, useState } from 'react';
import { ISeatDetails } from "../../../features/seat-layout/components/types/ISeatDetails";
import { DeskWidth } from "../constant";
import '../desk/desk.scss';
import { Seat } from '../seat/seat';

export const Desk: React.FunctionComponent<IDeskProps> = (props: IDeskProps) => {
    const deskLength = props.seats.length * 100;

    const getSeatIDsToBeDisabled = (seats: ISeatDetails[], selectedSeatID: string): string[] => {
        let seatIDsToBeDisabled: string[] = [];
        seats.forEach((seat) => {
            if (seat.isReserved || seat.id === selectedSeatID) {
                seatIDsToBeDisabled.push(seat.id);
                seatIDsToBeDisabled = [...new Set(seatIDsToBeDisabled)];
            }
        });
        return seatIDsToBeDisabled;
    };

    const [seatIDsToBeDisabled, setSeatIDsToBeDisabled] = useState<string[]>(getSeatIDsToBeDisabled(props.seats, props.selectedSeatID));

    useEffect(() => {
        setSeatIDsToBeDisabled(getSeatIDsToBeDisabled(props.seats, props.selectedSeatID))
    }, [props.seats, props.selectedSeatID])

    if (props.seats.length === 0) {
        return null;
    }
    return (
        <div className='desk-layout'>
            <div className='desk-layout__seats'>
                {times(round(props.seats.length / 2), (index: number) => (
                    props.seats[index] &&
                    <Seat
                        isEnabled={!seatIDsToBeDisabled.includes(props.seats[index].id)}
                        isReserved={false}
                        seatNumber={props.seats[index].id}
                        orientation='north'
                        selectSeat={props.onSeatSelect}
                        seatID={props.seats[index].id}
                        tooltip={props.seats[index].id}
                        isSelected={props.selectedSeatID === props.seats[index].id}
                    />))}
            </div>
            <div className="desk-layout__desk" style={{ width: deskLength, height: DeskWidth }} >
                <div className="desk-layout__desk__separator" />
            </div>
            <div className='desk-layout__seats'>
                {times(ceil(props.seats.length - round(props.seats.length / 2)), (index: number) => (
                    props.seats[index + 3] && <Seat
                        isEnabled={true}
                        isReserved={false}
                        seatNumber={props.seats[index + 3].id}
                        orientation='south'
                        selectSeat={props.onSeatSelect}
                        seatID={props.seats[index + 3].id}
                        tooltip={props.seats[index + 3].id}
                        isSelected={props.selectedSeatID === props.seats[index + 3].id}
                    />))}
            </div>
        </div>
    )
}

interface IDeskProps {
    seats: ISeatDetails[],
    onSeatSelect: (seatID: string) => void;
    selectedSeatID: string;
}