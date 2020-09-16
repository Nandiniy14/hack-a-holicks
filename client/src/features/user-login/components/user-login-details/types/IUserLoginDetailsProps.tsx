import { fetchPHDOneDetailsStarted } from "../../../../../data/phd-one-details/actions";

export interface IUserLoginDetailsProps {
    onNavigate: (path: string) => any;
    fetchPHDOneDetails: () => ReturnType<typeof fetchPHDOneDetailsStarted>;
}