import layout1 from "./images/leftTextLayout.png";
import layout2 from "./images/rightTextLayout.png";
import React, { useEffect, useState } from "react";
import "../demo/scss/select-layout.scss";
import { NavButton } from "../../../components/guternberg/guternberg-block-config/sub-components/navButton";
import { NavItem } from "../../../components/guternberg/guternberg-block-config/sub-components/navItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { NavBar } from "../../../components/guternberg/guternberg-block-config/sub-components/navBar";
import { NavGroup } from "../../../components/guternberg/guternberg-block-config/sub-components/NavGroup";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
import { SearchBar } from "../../../components/searchBar";
import {SelectItem} from "../../../components/selectCard"
import testImage from "./images/test-image.png"

const BlockConfigContent = () => {
  const [isPopupRendered, setIsPopupRendered] = useState(false);
  const [selectedValues,setSelectedValues] = useState([])
  //layout config
  const layoutConfig = [
    { name: "layout 1", img: layout1 },
    { name: "layout 2", img: layout2 },
  ];

  const showSettings = () => {
    setIsPopupRendered(true);
  };

  const hideSettings = () => {
    setIsPopupRendered(false);
  };


  /** Add Selected Value And Remove De selected values*/
  const addSelectedValues = (isSelected,valueToSelect) => {
    if(isSelected === true && selectedValues.includes(valueToSelect) === false){
      setSelectedValues([...selectedValues,valueToSelect])
    }else if(isSelected === false && selectedValues.includes(valueToSelect) === true){
      //remove selected value
      const valueIndex = selectedValues.indexOf(valueToSelect)
      if(valueIndex > -1){
        selectedValues.splice(valueIndex,1)
        setSelectedValues(selectedValues)
      }
    }
  }

  // On Select Item Click
  const onClick = (isSelected,valueToSelect) => {
    addSelectedValues(isSelected,valueToSelect)
  }

  const renderLayouts = () => {
    return layoutConfig.map((layout) => {
      return (
        <div
          className="cs-select-layout__layout-1 layout"
          onClick={showSettings}
        >
          <img src={layout.img} alt={layout.name} data-layout={layout.name} />
          <h3 className="cs-select-layout__layout-name">{layout.name}</h3>
        </div>
      );
    });
  };
  return (
    <>
      <NavBar>
        <NavGroup>
          <NavItem>
            <SearchBar/>
          </NavItem>
          <NavItem>
            <NavButton
              name="More Settings"
              icon={<FontAwesomeIcon icon={faList} />}
            />
          </NavItem>
          <NavItem>
            <NavButton name="Amazon" icon={<FontAwesomeIcon icon={faAmazon}/>} />
          </NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem>
            <NavButton
              name="More Settings"
              icon={<FontAwesomeIcon icon={faList} />}
            />
          </NavItem>
          <NavItem>
            <NavButton name="Name" icon={<FontAwesomeIcon icon={faList} />} />
          </NavItem>
        </NavGroup>
      </NavBar>
      <SelectItem image={testImage} text="Is Your Child Overly Aggressive" valueToSelect={"Is Your Child Overly Aggressive"} onClick={onClick}/>
      <SelectItem image={testImage} text="Is 2" valueToSelect={"Is 2"} onClick={onClick}/>
      <SelectItem image={testImage} text="Is 3" valueToSelect={"Is 3"} onClick={onClick}/>
    </>
  );
};
export default BlockConfigContent;
