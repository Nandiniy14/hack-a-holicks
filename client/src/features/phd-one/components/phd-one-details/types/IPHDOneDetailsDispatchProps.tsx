import { fetchLayoutDataStarted, fetchLocationDetailsStarted, fetchPHDOneDetailsStarted } from "../../../../../data/phd-one-details/actions";

export interface IPHDOneDetailsDispatchProps {
    onNavigate: (path: string) => any;
    fetchPHDOneDetails: () => ReturnType<typeof fetchPHDOneDetailsStarted>;
    fetchLocationDetails: () => ReturnType<typeof fetchLocationDetailsStarted>;
    fetchLayoutData: (data: object) => ReturnType<typeof fetchLayoutDataStarted>;
}