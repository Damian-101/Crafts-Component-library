import { FC } from "react";
import "./index.scss";
interface DropdownSmProps {
    /** Dropdown Items  */
    dropdownItems: string[];
    /** On DropdonwSm Change `return(value)`*/
    onChange?: (value: string) => void;
}
/** Dropdown Component Small */
export declare const DropdownSm: FC<DropdownSmProps>;
export {};
