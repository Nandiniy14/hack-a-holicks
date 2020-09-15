import { fetchPHDOneDetailsStarted } from "../../../../../data/phd-one-details/actions";

export interface IPHDOneDetailsDispatchProps {
    onNavigate: (path: string) => any;
    fetchPHDOneDetails: () => ReturnType<typeof fetchPHDOneDetailsStarted>;
}