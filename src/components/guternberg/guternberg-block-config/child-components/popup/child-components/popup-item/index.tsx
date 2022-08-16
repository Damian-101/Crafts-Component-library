import "./index.scss"
import PropTypes from 'prop-types';
import React,{ FC } from "react";

interface PopupItemProps {
    children?:any
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
    children: PropTypes.any,
  };
  