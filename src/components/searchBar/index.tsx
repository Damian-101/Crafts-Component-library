import React, { useState } from "react"
import "./index.scss"


export const SearchBar = ({onChange}) => {
    const [isSelected,setIsSelected] = useState(false)
    const [value,setValue] = useState("")

    // on bar click 
    const onBarClick = () => {
        setIsSelected(!isSelected)
    }

    // on bar blur 
    const onBarBlur = () => {
        setIsSelected(!isSelected)
    }

    const clearInput = () => {
        setValue("")
    }

    const onInputChange = (e:any) => {
        setValue(e.target.value)
        onChange(value)
    }

    const onCloseClick = (e:any) => {
        clearInput()
    }

    return(
        <>
            <div className={`searchbar ${isSelected ? "active" : ""}`} onClick={onBarClick} onBlur={onBarBlur} tabIndex={0}>
                {/* @ts-ignore */}
                <svg  className="searchbar__icon search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                <input type="text" value={value} onChange={onInputChange} className="searchbar__input-field" placeholder="Search Posts"/>
                <svg onClick={onCloseClick} className="searchbar__icon close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"/></svg>
            </div>
        </>
    )
}