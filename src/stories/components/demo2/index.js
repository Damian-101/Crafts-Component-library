import RenderPopupContent from "./renderPopupContent"
import React,{useState} from "react"
import "../../../scss/theme.scss"
import Button from "../../../components/button"
const BlockConfigContent = () => {
    const [isPopupRendered,setIsPopupRendered] = useState(false)
    const showSettings = () => {
        setIsPopupRendered(true)
    }

    const hideSettings = () => {
        setIsPopupRendered(false)
    }

    return (
        <>
        <RenderPopupContent isPopupRendered={isPopupRendered} onClose={hideSettings}/>
            <h2 className="cs-select-layout__sub-heading">Select To Show Popup</h2>
            <Button buttonName="Show Popup" className="show--popup" type={'submit'} name="show-popup" onClick={showSettings}/>
        </>
    )
}
export default BlockConfigContent