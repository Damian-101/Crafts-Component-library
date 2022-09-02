import React,{ FC,ReactNode } from "react";
import PropTypes from "prop-types";
import "./index.scss"

interface NavItemProps {
    /**Nav Item Content */
    children: ReactNode | ReactNode[],
    // Add A Custom Class Name To The Component 
    className?: string
}


/**Component To Display A Nav Item With Default Styling */
export const NavItem:FC<NavItemProps> = ({children,className}) => {
  return (
    <>
      <div className={`block-config__navbar-nav-item ${className ? className : ""}`}>
        {children}
      </div>
    </>
  );
};


// /**
//  * Component Args
//  */
//  NavItem.propTypes = {
//     /**Nav Item Content */
//     children : PropTypes.element,
//  };
 
