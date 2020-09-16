export interface ISeatProps {
    isSelected: boolean,
    isReserved: boolean,
    tooltip: string,
    isEnabled: boolean,
    orientation: string,
    seatNumber: string | number,
    seatID: string,
    selectSeat: (selectedSeatID: string) => void,
    style?: object,
}