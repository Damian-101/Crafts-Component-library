import React,{ useState,useEffect } from "react"
import "./index.scss"
export const SelectItem = ({ image,text,onClick,valueToSelect }) => {
    const [isSelected, setIsSelected] = useState(false)
    //attributes 

    const onToggleSelectClick = (e:any) => {
        setIsSelected(!isSelected)
        onClick(!isSelected,valueToSelect)
    }


    return (
        <div className="select-item" onClick={onToggleSelectClick}>
            <div className="select-item__img" style={{backgroundImage:`url(${image})`}}></div>
            <div className="select-item__name">{text}</div>
            <div className={`select-item__icon`} style={{opacity:isSelected === true ? 100:0}} >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="12" className="select-item__icon-bg"/>
                    <path d="M8 12.2222L10.8571 15L16 10" stroke="white" />
                </svg>
            </div>
        </div>
    )
}