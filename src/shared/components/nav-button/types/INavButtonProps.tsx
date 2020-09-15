import { ReactElement } from "react";

export interface INavButtonProps {
    className: string;
    buttonText: string | ReactElement;
    onClick: () => void;
}