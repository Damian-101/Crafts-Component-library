import React,{ FC,ReactNode } from "react";
import PropTypes from "prop-types";
import "./index.scss"
interface NavBarProps {
    /**Nav Item Content */
    children: ReactNode | ReactNode[],
    // Add A Custom Class Name To The Component 
    className?: string
}

export const NavBar:FC<NavBarProps> = ({ children,className }) => {
  return (
    <>
      <div className={`block-config__navbar ${className}`}>
        {children}
      </div>
    </>
  );
};

// /**
//  * Component Args
//  */
//  NavBar.propTypes = {
//     /**Nav Item Content */
//     children : PropTypes.element,
//  };
 
