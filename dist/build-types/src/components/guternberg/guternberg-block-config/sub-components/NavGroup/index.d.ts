import { FC, ReactNode } from "react";
import "./index.scss";
interface NavGroupProps {
    /**Nav Item Content */
    children: ReactNode | ReactNode[];
    className?: string;
}
export declare const NavGroup: FC<NavGroupProps>;
export {};
