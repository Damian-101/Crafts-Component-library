import "./index.scss";
import { FC, ReactNode } from "react";
interface PopupGroupProps {
    /**
     * Label Of Group
     */
    label?: string;
    /**
     * Group Content
     */
    children?: ReactNode;
}
/** To Group Popup Content */
export declare const PopupGroup: FC<PopupGroupProps>;
export {};
