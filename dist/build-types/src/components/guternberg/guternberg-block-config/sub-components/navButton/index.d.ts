import { FC, ReactNode } from "react";
import "./index.scss";
interface NavButtonProps {
    /** Name Of The Button */
    name?: string;
    /** An Icon For The Button */
    icon?: ReactNode;
    /**On Button Click */
    onClick?: (e: any) => {};
    /** Is Button Selected */
    isSelected?: boolean;
    /**Add A Custom Class Name To The Component */
    className?: string;
    /** Type Of The Button*/
    type?: string;
    /** Disable The Button */
    disabled: boolean;
}
/** Icon Text Component To Display GuternbergBlockConfig Navbar Button  */
export declare const NavButton: FC<NavButtonProps>;
export {};
