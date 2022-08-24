import RenderPopupContent from "./renderPopupContent"
import layout1 from "./images/leftTextLayout.png"
import layout2 from "./images/rightTextLayout.png"
import React,{useState} from "react"
import "../demo/scss/select-layout.scss"

const BlockConfigContent = () => {
    const [isPopupRendered,setIsPopupRendered] = useState(false)
    //layout config
    const layoutConfig = [
        { name: "layout 1", img: layout1 },
        { name: "layout 2", img: layout2 }
    ]

    const showSettings = () => {
        setIsPopupRendered(true)
    }

    const hideSettings = () => {
        setIsPopupRendered(false)
    }

    const renderLayouts = () => {
        return layoutConfig.map(layout => {
            return (
                <div className="cs-select-layout__layout-1 layout" onClick={showSettings} >
                    <img src={layout.img} alt={layout.name} data-layout={layout.name}/>
                    <h3 className="cs-select-layout__layout-name">{layout.name}</h3>
                </div>
            )
        })
    }
    return (
        <>
        {/* <RenderPopupContent isPopupRendered={isPopupRendered} onClose={hideSettings}/> */}
        <div className="cs-msg-ui cs-select-layout">
            <h2 className="cs-select-layout__sub-heading">Select A Layout</h2>
            {/* Select Options  */}
            <div class="cs-select-layout__select">
                {renderLayouts()}
            </div>  
            {/* Help Link  */}
            <h3 className="cs-select-layout__help-link"><a href="#">Don’t Know What Layout To Use?</a></h3>
        </div>
        </>
    )
}
export default BlockConfigContent