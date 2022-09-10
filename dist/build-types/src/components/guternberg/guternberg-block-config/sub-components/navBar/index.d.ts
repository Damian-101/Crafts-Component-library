import { FC, ReactNode } from "react";
import "./index.scss";
interface NavBarProps {
    /**Nav Item Content */
    children: ReactNode | ReactNode[];
    className?: string;
}
export declare const NavBar: FC<NavBarProps>;
export {};
