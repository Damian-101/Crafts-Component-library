import React, { FC, useEffect, useState, ReactNode } from "react";
import "./index.scss"
import ReactTooltip from "react-tooltip";

interface NavButtonProps {
  /** Name Of The Button */
  name : string,
  /** An Icon For The Button */
  icon : ReactNode,
  /**On Button Click */
  onClick ?:(e:any) => {},
  /** Is Button Selected */
  isSelected ?:boolean,
  // Add A Custom Class Name To The Component 
  className?: string
}


/** Icon Text Component To Display GuternbergBlockConfig Navbar Button  */
export const NavButton:FC<NavButtonProps> = ({name,icon,onClick,isSelected,className}) => {
  return (
    <>
      <div className={`nav-button ${isSelected ? 'active' : ""} ${className}`} onClick={onClick} data-tip={name} >
      <ReactTooltip place="top" type="dark" effect="solid" clickable={true} className="nav-button__tooltip"/>
        <div className="nav-button__icon">
          {/* @ts-ignore */}
          {icon}
        </div>
        <div className="nav-button__name">{name}</div>
      </div>
    </>
  );
};


// /**
//  * Component Args
//  */
//  NavButton.propTypes = {
//    /** Name Of The Button */
//    name : PropTypes.string,
//    /** An Icon For The Button */
//    icon : PropTypes.element,
//      /**On Button Click */
//   onClick:PropTypes.func,
//   /** Is Button Selected */
//   isSelected:PropTypes.bool,
// };
