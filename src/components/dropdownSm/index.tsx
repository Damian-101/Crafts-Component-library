import React, { FC, ReactNode } from "react";
import "../../../wordpress-css"
import "./index.scss";
// @ts-ignore
import dropdownIcon from "./icons/caret-down-solid.svg"


interface DropdownSmProps {
    /** Dropdown Items  */
    dropdownItems:string[],
    /** On DropdonwSm Change `return(value)`*/
    onChange?:(value:string) => void
}


/** Dropdown Component Small */
export const DropdownSm:FC<DropdownSmProps> = ({dropdownItems,onChange}) => {
    const renderDropdownItems = () => {
        return dropdownItems.map(dropdownItem => {
            return <option value={dropdownItem}>{dropdownItem}</option>
        })
    }
    const onDropdownSmChange = (e:any) => {
        //Send Selected Value With OnClick Props
        const value:string = e.target.value
        if(onChange){
            onChange(value)
        }
    }
    return(
        <>
            <select className="dropdown-control-sm" style={{backgroundImage:`url(${dropdownIcon})`}} onChange={onDropdownSmChange}>
                {renderDropdownItems()}
            </select>
        </>
    )
};

