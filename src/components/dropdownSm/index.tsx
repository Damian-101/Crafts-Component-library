import React, { FC, ReactNode } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
// @ts-ignore
import dropdownIcon from "./icons/caret-down-solid.svg"



/** Dropdown Component Small */
export const DropdownSm = () => {
    return(
        <>
        <select className="dropdown-control-sm" style={{backgroundImage:`url(${dropdownIcon})`}}>
            <option value="">Select A Value</option>
            <option value="">Select A Value 2</option>
        </select>
        </>
    )
};

