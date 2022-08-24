import React, { FC,ReactNode } from "react"
import PropTypes from 'prop-types';


interface DropdownItemProps {
    /**
     * Dropdown Item Value (This Value Can Be Accessed Using OnClick Function Return Values)
     */
    value?:string;
    /**
     * Icon Of The Dropdown Item
     */
    icon?:ReactNode;
    /**
     * Dropdown Content
     */
    children?:ReactNode;
    /**
     * Run The Function When Dropdown Is Clicked
     */
    onClick?:(arg0: string) => void;

}

/** Display An Item Of The Popup */
export const DropdownItem:FC<DropdownItemProps> = (props) => {
    const onClick = (e:any) => {
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
    icon:PropTypes.element,
    /**
     * Dropdown Content
     */
    children:PropTypes.element
  };