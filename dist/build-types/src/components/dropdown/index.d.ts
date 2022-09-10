import { FC, ReactNode } from "react";
import "./index.scss";
export { DropdownItem } from "./child-components/dropdown-item";
interface DropdownProps {
    /**
     * Add Dropdown Label
     */
    label?: string;
    /**
     * Value To Display In The Input Field
     */
    value?: string;
    /**
     * Whether The Dropdown Is Selected / Open
     */
    isOpen?: boolean;
    /**
     * Add Dropdown Content
     */
    children?: ReactNode | ReactNode[];
    /**
     * Run The Function When Dropdown Is Clicked
     */
    onClick?: () => void;
    /**
     * Run The Function When Dropdown Is Not Selected
     */
    onBlur?: () => void;
}
/** Dropdown Component */
export declare const Dropdown: FC<DropdownProps>;
