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
    /** Disable Component */
    disabled:boolean
}


/** Dropdown Component Small */
export const DropdownSm:FC<DropdownSmProps> = ({dropdownItems,onChange,disabled}) => {
    const renderDropdownItems = () => {
        return dropdownItems.map(dropdownItem => {
            if(disabled && disabled === true){
                return <option value={dropdownItem} disabled>{dropdownItem}</option>
            }else{
                return <option value={dropdownItem}>{dropdownItem}</option>
            }
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
            <select className="dropdown-control-sm" data-crafts-is-dropdown-disabled={disabled && disabled} style={{backgroundImage:`url(${dropdownIcon})`}} onChange={onDropdownSmChange}>
                {renderDropdownItems()}
            </select>
        </>
    )
};

