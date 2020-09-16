import { ISeatDetails } from "../../../features/seat-layout/components/types/ISeatDetails";

/**
 * Nacchindi rasko
 */
export const mapAndGroupDesks = (desksData: any[]) => {
    let mappedDesks: ISeatDetails[] = [];
    let groups;
    const key = 'deskGroupId';
    if (desksData) {
        desksData.forEach((deskData: any) => {
            mappedDesks.push({
                id: deskData._id,
                siblingUIDs: deskData.siblinguids,
                uid: deskData.uid,
                deskName: deskData.deskName,
                flooruid: deskData.flooruid,
                santized: deskData.santized,
                deskGroupId: deskData.deskGroupId,
                isReserved: deskData.deskName === "F09D196"
            });
        });

        groups = mappedDesks.reduce((result: any, currentValue: any) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            return result;
        }, {});
    }

    return Object.values(groups);
}
