import { FC } from "react";
import "./index.scss";
interface ToggleBtnProps {
    /**Toggle Button Label */
    label: string;
    /** Is Toggle Button Enabled */
    isEnable: boolean;
    /** On Toggle Button Click */
    onClick?: (e: any) => void;
}
/**Toggle Button */
export declare const ToggleBtn: FC<ToggleBtnProps>;
export {};
