import { FC } from "react";
import "./index.scss";
import "../../scss/theme.scss";
import "../scss/input-fields.scss";
interface TextInputControlProps {
    /**
     * Add Input Field Label
     */
    label?: string;
    /**
     * Value To Display In The Input Field
     */
    value?: string;
    /**
     * Placeholder Value Of The Input Field
     */
    placeholder?: string;
    /**
     * Run The Function When Input Value Is Changing
     */
    onChange?: () => void;
    /**
     * Maximum Character Count
     */
    max?: number;
    /**
     * Error Message To Display
     */
    errMsg?: string;
    /**
     * Add A Class Name To The Input Field
     */
    className?: string;
}
/** Text Input Field */
export declare const TextInputControl: FC<TextInputControlProps>;
export {};
