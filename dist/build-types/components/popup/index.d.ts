import { FC } from 'react';
import "./index.scss";
interface PopupProps {
    /**
     * Label Of The Popup
     */
    label?: string;
    /**
     * Popup Visibility
     */
    isPopupRendered?: boolean;
    /**
     * On Popup Close
     */
    onClose?: () => void;
    /**
     * Popup Content
     */
    children?: any;
}
/** Display A Popup */
export declare const Popup: FC<PopupProps>;
export { PopupGroup } from "./child-components/popup-group";
export { PopupItem } from "./child-components/popup-item";
