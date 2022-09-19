import { FC } from "react";
import "../../../wordpress-css";
import "./index.scss";
interface DropdownSmProps {
    /** Dropdown Items  */
    dropdownItems: string[];
    /** On DropdonwSm Change `return(value)`*/
    onChange?: (value: string) => void;
    /** Disable Component */
    disabled: boolean;
}
/** Dropdown Component Small */
export declare const DropdownSm: FC<DropdownSmProps>;
export {};
