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
    className?: string;
}
/** Icon Text Component To Display GuternbergBlockConfig Navbar Button  */
export declare const NavButton: FC<NavButtonProps>;
export {};
