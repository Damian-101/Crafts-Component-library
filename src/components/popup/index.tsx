import React,{ FC } from 'react';
import "./index.scss";
import PropTypes from "prop-types";

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
  children?:any;
}


/** Display A Popup */
export const Popup: FC<PopupProps> = ({
  isPopupRendered,
  children,
  onClose,
  label,
}) => {
  return (
    <>
      <div className={`block-config__popup ${isPopupRendered ? "active" : ""}`}>
        <div
          className="block-config__popup-overlay"
          onClick={onClose}
        ></div>
        {isPopupRendered === true && (
          <div className="block-config__popup-content">
            <div className="block-config__popup-close-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={onClose}
              >
                <path
                  d="M2 2L22 22M2 22L22 2"
                  stroke="black"
                  stroke-width="3"
                />
              </svg>
            </div>
            <h1 className="block-config__popup-heading">{label}</h1>
            {children}
          </div>
        )}
      </div>
    </>
  );
};

/**
 * Component Args
 */
Popup.propTypes = {
  /**
   * Label Of The Popup
   */
  // @ts-ignore
  label: PropTypes.string,
  /**
   * Popup Visibility
   */
  // @ts-ignore
  isPopupRendered: PropTypes.bool,
  /**
   * On Popup Close
   */
  // @ts-ignore
  onClose: PropTypes.func,
  /**
   * Popup Content
   */
  // @ts-ignore
  children: PropTypes.element,
};


// export sub components 
export { PopupGroup } from "./child-components/popup-group";
export { PopupItem} from "./child-components/popup-item";