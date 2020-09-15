import { fetchPHDOneDetailsStarted } from "../../../../../data/phd-one-details/actions";

export interface IOverviewBackgroundDispatchProps {
    onNavigate: (path: string) => any;
    fetchPHDOneDetails: () => ReturnType<typeof fetchPHDOneDetailsStarted>;
}