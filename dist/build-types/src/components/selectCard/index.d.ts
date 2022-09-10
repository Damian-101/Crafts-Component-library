import { FC } from "react";
import "./index.scss";
interface SelectItemProps {
    /** Select Items Image Path */
    image?: string;
    /** Item Text */
    text?: string;
    /** Value To Select */
    valueToSelect?: string;
    /** On Item Click `return(isSelected,valueToSelect)`*/
    onClick?: (isSelected: boolean, valueToSelect: string) => void;
    /** Loading Screen For The Component */
    isLoading?: boolean;
}
export declare const SelectItem: FC<SelectItemProps>;
export {};
