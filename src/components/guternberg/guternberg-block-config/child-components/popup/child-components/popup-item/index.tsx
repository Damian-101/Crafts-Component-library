import "./index.scss"
import PropTypes from 'prop-types';
import React,{ FC,ReactNode } from "react";


/**
 * To Display A Item Of The Popup With Default Styling
 */
interface PopupItemProps {
    children?:ReactNode
}

export const PopupItem:FC<PopupItemProps> = ({children}) => {
    return(
        <div className="block-config__popup-item">
            {children}
        </div>
    )
}


/**
 * Component Args
 */
 PopupItem.propTypes = {
    /**
     * Popup Item Content
     */
    children: PropTypes.element,
  };
  