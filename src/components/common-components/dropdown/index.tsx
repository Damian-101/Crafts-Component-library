import React, { FC, ReactNode, useState } from "react";
import "../scss/input-fields.scss";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { DropdownItem as DropdownItemSubComponent } from "./child-components/dropdown-item";
interface DropdownProps {
  /**
   * Add Dropdown Label
   */
  label?: string;
  /**
   * Value To Display In The Input Field
   */
  value?: string;
  /**
   * Whether The Dropdown Is Selected / Open
   */
  isOpen?: boolean;
  /**
   * Add Dropdown Content
   */
  children?: ReactNode;
  /**
   * Run The Function When Dropdown Is Clicked
   */
  onClick?: () => void;
  /**
   * Run The Function When Dropdown Is Not Selected
   */
  onBlur?: () => void;
}


/** Dropdown Component */
export const Dropdown: FC<DropdownProps> = ({
  label,
  value,
  children,
  onBlur,
  onClick,
  isOpen,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div
      className={`dropdown-control ${isOpen ? "selected" : ""} ${
        isExpanded ? "expanded" : ""
      }`}
      onBlur={onBlur}
    >
      <div
        className={`input-field ${isOpen ? "selected" : ""} ${
          isExpanded ? "expanded" : ""
        }`}
        onClick={onClick}
      >
        <label>{label && label}</label>
        {value ? (
          <div className="input-field__input">{value}</div>
        ) : (
          <div className="input-field__input">{""}</div>
        )}
        <div className={`dropdown-control__icon ${isOpen ? "active" : ""}`}>
        {/* @ts-ignore */}
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <div className="dropdown-control__dropdown">{children}</div>
    </div>
  );
};

/**
 * Component Args
 */
Dropdown.propTypes = {
  /**
   * Add Dropdown Label
   */
  // @ts-ignore
  label: PropTypes.string,
  /**
   * Value To Display In The Input Field
   */
  // @ts-ignore
  value: PropTypes.string,
  /**
   * Whether The Dropdown Is Selected / Open
   */
  // @ts-ignore
  isOpen: PropTypes.bool,
  /**
   * Add Dropdown Content
   */
  // @ts-ignore
  children: PropTypes.element,
  /**
   * Run The Function When Dropdown Is Clicked
   */
  // @ts-ignore
  onClick: PropTypes.func,
  /**
   * Run The Function When Dropdown Is Not Selected
   */
  // @ts-ignore
  onBlur: PropTypes.func,
};

//Export Sub Components
export let DropdownItem = DropdownItemSubComponent;
