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
import { SelectItem } from "../../../components/selectCard";
import testImage from "./images/test-image.png";
import { Dropdown } from "../../../components/dropdown";
import { DropdownSm } from "../../../components/dropdownSm";
import "./scss/index.scss";
import { TextInputControl } from "../../../components/text-input-control";

const BlockConfigContent = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const testData = [
    { text: "`Text 1` Selected", image: { testImage } },
    { text: "Text 2", image: { testImage } },
    { text: "Text 3", image: { testImage } },
    { text: "Text 4", image: { testImage } },
  ];

  /** Add Selected Value And Remove De selected values*/
  const addSelectedValues = (isSelected, valueToSelect) => {
    if (
      isSelected === true &&
      selectedValues.includes(valueToSelect) === false
    ) {
      setSelectedValues([...selectedValues, valueToSelect]);
    } else if (
      isSelected === false &&
      selectedValues.includes(valueToSelect) === true
    ) {
      //remove selected value
      const valueIndex = selectedValues.indexOf(valueToSelect);
      if (valueIndex > -1) {
        selectedValues.splice(valueIndex, 1);
        setSelectedValues(selectedValues);
      }
    }
  };

  // On Select Item Click
  const onClick = (isSelected, valueToSelect) => {
    addSelectedValues(isSelected, valueToSelect);
  };

  const renderItems = () => {
    //if search value match data render the Item component
    return (
      <>
        <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        // isLoading={true}
        isDefaultSelected={true}
        disableSelect={true}
      />
      <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />
      <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />
      <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />

<SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />
      <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />
      <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />
      <SelectItem
        image={testData[0].image.testImage}
        text={testData[0].text}
        valueToSelect={testData[0].text}
        onClick={onClick}
        isLoading={true}
        isDefaultSelected={true}
      />
      </>
    );
  };

  return (
    <>
      <NavBar>
        <NavGroup>
          <NavItem className="nav-item-searchbar">
            <SearchBar
              onChange={(value) => {
                setSearchValue(value);
              }}
            />
          </NavItem>
          <NavItem className="nav-item__sort">
            <DropdownSm
              dropdownItems={["Select Posts", "item2"]}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem>
            <NavButton
              name="More Settings"
              icon={<FontAwesomeIcon icon={faList} />}
              disabled={true}
            />
          </NavItem>
          <NavItem>
            <NavButton
              type={"Button"}
              name="Name"
              icon={<FontAwesomeIcon icon={faList} />}
            />
          </NavItem>
          <NavItem>
            <NavButton name="Submit Posts" />
          </NavItem>
          <NavItem>
            <TextInputControl label="Add Your Name" />
          </NavItem>
        </NavGroup>
      </NavBar>
      {renderItems()}
      {/* {renderItems()} */}
      {/* {renderItems()} */}
    </>
  );
};
export default BlockConfigContent;
