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
            <Button buttonName="Show Popup" className="show--popup" type={'submit'} name="show-popup" onClick={showSettings}/>
        </>
    )
}
export default BlockConfigContent