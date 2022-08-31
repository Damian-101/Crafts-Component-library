import React,{ FC,ReactNode } from "react";
import PropTypes from "prop-types";
import "./index.scss"

interface NavGroupProps {
  /**Nav Item Content */
  children: ReactNode | ReactNode[];
  // Add A Custom Class Name To The Component 
  className?: string
}

export const NavGroup:FC<NavGroupProps> = ({ children,className }) => {
  return (
    <>
      <div className={`block-config__navbar-group ${className}`}>{children}</div>
    </>
  );
};



// /**
//  * Component Args
//  */
//  NavGroup.propTypes = {
//     /**Nav Item Content */
//     children : PropTypes.element,
//  };
 

