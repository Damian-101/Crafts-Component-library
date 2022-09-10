import { FC, ReactNode } from "react";
import "./index.scss";
interface NavItemProps {
    /**Nav Item Content */
    children: ReactNode | ReactNode[];
    className?: string;
}
/**Component To Display A Nav Item With Default Styling */
export declare const NavItem: FC<NavItemProps>;
export {};
