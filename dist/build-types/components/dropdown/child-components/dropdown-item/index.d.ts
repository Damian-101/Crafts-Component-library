import { FC, ReactNode } from "react";
interface DropdownItemProps {
    /**
     * Dropdown Item Value (This Value Can Be Accessed Using OnClick Function Return Values)
     */
    value?: string;
    /**
     * Icon Of The Dropdown Item
     */
    icon?: ReactNode;
    /**
     * Dropdown Content
     */
    children?: ReactNode;
    /**
     * Run The Function When Dropdown Is Clicked
     */
    onClick?: (arg0: string) => void;
}
/** Display An Item Of The Popup */
export declare const DropdownItem: FC<DropdownItemProps>;
export {};
