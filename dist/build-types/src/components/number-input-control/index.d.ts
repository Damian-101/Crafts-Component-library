import { FC } from "react";
import "./index.scss";
import "../../scss/theme.scss";
import "../scss/input-fields.scss";
interface NumberInputControlProps {
    /**
     * Add Input Field Label
     */
    label?: string;
    /**
     * Value To Display In The Input Field
     */
    value?: number;
    /**
     * Placeholder Value Of The Input Field
     */
    placeholder?: string;
    /**
     * Run The Function When Input Value Is Changing
     */
    onChange?: () => void;
    /**
     * Error Message To Display
     */
    errMsg?: string;
    /**
     * Add A Class Name To The Input Field
     */
    className?: string;
}
/** Number Input Field */
export declare const NumberInputControl: FC<NumberInputControlProps>;
export {};
