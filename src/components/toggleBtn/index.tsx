import React,{FC} from "react"
import "./index.scss"

interface ToggleBtnProps{
    /**Toggle Button Label */
    label:string;
    /** Is Toggle Button Enabled */
    isEnable:boolean
    /** On Toggle Button Click */
    onClick?:(e:any) => void
}

/**Toggle Button */
export const ToggleBtn:FC<ToggleBtnProps> = ({label,isEnable,onClick}) => {
    return(
        <div className="toggle-btn">
            <div className="toggle-btn__label">{label && label}</div>
            <label className="switch">
                <input type="checkbox" className={`${isEnable && isEnable ? 'active':''}`} onClick={onClick && onClick}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}