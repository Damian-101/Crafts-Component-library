import { FC, ReactNode } from "react";
import "./scss/index.scss";
import "../../../scss/loading-screen.scss";
import "react-loading-skeleton/dist/skeleton.css";
export { NavBar } from "./sub-components/navBar";
export { NavItem } from "./sub-components/navItem";
export { NavButton } from "./sub-components/navButton";
export { NavGroup } from "./sub-components/NavGroup";
export interface BlockConfigProps {
    /**
     * Name Of The Block
     */
    name?: string;
    /**
     * Description About The Block
     */
    description?: string;
    /**
     * Block Icon
     */
    icon?: ReactNode;
    /**
     * Block Configuration Content
     */
    children?: ReactNode;
    /**
     * Is Component Content Loading
     */
    isLoading?: boolean;
}
/**
 * A Component To Display Guternberg Block Configuration
 */
export declare const GuternbergBlockConfig: FC<BlockConfigProps>;
