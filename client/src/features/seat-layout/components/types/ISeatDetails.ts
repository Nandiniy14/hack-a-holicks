export interface ISeatDetails {
    id: string,
    isSelected?: boolean,
    isEnabled?: boolean,
    isReserved?: boolean,
    siblingUIDs: string[],
    uid: string,
    deskName: string,
    flooruid: string,
    santized: boolean,
    deskGroupId: string,
}