import React, { FC, useEffect, useState, ReactNode } from "react";
import "./scss/index.scss";
// @ts-ignore
import brandLogo from "../../../images/brand-logo-light.png";
import PropTypes from "prop-types";
import "../../../scss/loading-screen.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { Oval } from "react-loader-spinner";
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
  /**
   * Notification Text
   */
   notificationText?:string
  /**
   * On Notification Close `return(e)`
   */
   onNotificationClose?:(e:any) => void
  /**
   * Is Notification Open
   */
   isNotificationOpen?:boolean
}

/**
 * A Component To Display Guternberg Block Configuration
 */
export const GuternbergBlockConfig: FC<BlockConfigProps> = ({
  name,
  description,
  icon,
  children,
  isLoading,
  notificationText,
  onNotificationClose,
  isNotificationOpen,
}) => {
  const [isErrorMsg, setIsErrorMsg] = useState(false);

  const loading = () => {
    const skeletonColor = "rgb(209, 209, 209)";
    return (
      <div className="loading block-config">
        <Oval
          height="60"
          width="60"
          color={skeletonColor}
          ariaLabel="three-dots-loading"
          secondaryColor={skeletonColor}
          strokeWidth="4"
        />
      </div>
    );
  };

  //isLoading Default Is False
  if (!isLoading) {
    isLoading = false;
  }
  return (
    <>
      {isLoading === false ? (
        <div className="block-config crafts">
          <img
            src={"https://i.ibb.co/1XLdX53/brand-logo-light.png"}
            alt="brand logo"
            className="block-config__details-brand-logo"
          />
          <div className="block-config__details">
            <div className="block-config__details-top">
              {icon && <div className="block-config__details-icon">{icon}</div>}
              {name && (
                <h1 className="block-config__details-heading">
                  {/* Block Name */}
                  {name}
                </h1>
              )}
            </div>
            {description && (
              <h2 className="block-config__details-description">
                {/* Block Description */}
                {description}
              </h2>
            )}
          </div>
          <div className="content">
            {children}
          </div>
          {isNotificationOpen && isNotificationOpen ? (
            <div className="block-config__error-msg">
              <div className="block-config__error-msg-notice">
                {notificationText && notificationText}
              </div>
              <div className="block-config__error-msg-icon" onClick={onNotificationClose && onNotificationClose}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 2L22 22M2 22L22 2"
                    stroke="black"
                    stroke-width="3"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        //component loading screen
        loading()
      )}
    </>
  );
};

/**
 * Component Args
 */
GuternbergBlockConfig.propTypes = {
  /**
   * Block Name
   */
  // @ts-ignore
  name: PropTypes.string,
  /**
   * Block Description
   */
  // @ts-ignore
  description: PropTypes.string,
  /**
   * Block Icon
   */
  icon: PropTypes.element,
  /**
   * Guternberg Block Config Content
   */
  children: PropTypes.element,
  /**
   * Is Component Content Loading
   */
  isLoading: PropTypes.bool,
};
