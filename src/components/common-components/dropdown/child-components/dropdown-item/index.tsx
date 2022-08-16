import React, { FC } from "react"
import PropTypes from 'prop-types';


interface DropdownItemProps {
    /**
     * Dropdown Item Value (This Value Can Be Accessed Using OnClick Function Return Values)
     */
    value?:string;
    /**
     * Icon Of The Dropdown Item
     */
    icon?:any;
    /**
     * Dropdown Content
     */
    children?:any;
    /**
     * Run The Function When Dropdown Is Clicked
     */
    onClick:(arg0: string) => void;

}


export const DropdownItem:FC<DropdownItemProps> = (props) => {
    const onClick = (e) => {
        const value:string = e.currentTarget.dataset.option
        if(props.onClick){
            if(props.value){
                props.onClick(value)
            }else{
                props.onClick(value)
            }
        }
    }
    return (
        
        <div className="dropdown-control__dropdown-option" data-option={props.value} onClick={onClick}>
            <div className="dropdown-control__dropdown-option-icon">{props.icon}</div>
            {props.children}
        </div>
    )
}


DropdownItem.propTypes = {
    /**
     * Dropdown Item Value (This Value Can Be Accessed Using OnClick Function Return Values)
     */
    value: PropTypes.string,
    /**
     * Run The Function When Dropdown Is Clicked
     */
    // @ts-ignore
    onClick: PropTypes.func,
    /**
     * Icon Of The Dropdown Item
     */
    icon:PropTypes.any,
    /**
     * Dropdown Content
     */
    children:PropTypes.any
  };