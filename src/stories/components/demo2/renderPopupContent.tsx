import React, { useEffect, useState } from 'react';
import {NumberInputControl} from '../../../components/number-input-control';
import {Dropdown,DropdownItem} from '../../../components/dropdown';
import {Popup,PopupGroup,PopupItem} from '../../../components/popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons'
import {ToggleBtn} from "../../../components/toggleBtn"
const RenderPopupContent = ({ isPopupRendered, onClose }) => {
  const [value, setValue] = useState()
  const [isSelected, setIsSelected] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [postCount, setPostCount] = useState(0)
  const optionsToSelect = ['week', 'month', 'year']


  useEffect(() => {
    if (!value) {
      setSelectedValue(optionsToSelect[0])
    }
  }, [])

  const onItemClick = (value) => {
    setSelectedValue(value)
    setIsSelected(false)
  }

  const renderOptions = () => {
    return optionsToSelect.map((option, index) => {
      return (
        <DropdownItem value={option} onClick={onItemClick} icon={<FontAwesomeIcon icon={faGear}/>}>
          <h2>{option}</h2>
        </DropdownItem>
      )
    })
  }

  return (
    <>
      <Popup
        isPopupRendered={isPopupRendered && isPopupRendered}
        onClose={onClose}
        label="Recommended Posts Settings"
      >
        <PopupGroup label="Post Settings">
          <PopupItem>
            <ToggleBtn label='Enable Dynamic Posts' isEnable={true} onClick={() => {alert('clicked')}}/>
          </PopupItem>
          <PopupItem>
            <NumberInputControl
              label="Max Posts Count"
              placeholder="Add Max Post Count"
            />
          </PopupItem>
          <PopupItem>
            <Dropdown
              label="Select Posts By"
              value={selectedValue && selectedValue + "ly Posts"}
              onClick={() => {
                console.log(isSelected)
                setIsSelected(!isSelected)
              }}
              onBlur={() => {
                setIsSelected(false)
              }}
              isOpen={isSelected}
            >
              {renderOptions()}
            </Dropdown>
          </PopupItem>
        </PopupGroup>
        <PopupGroup label="Advance Settings">
          <PopupItem>
            <div className="dropdown-control__select input-field">
              <h2>Dropdown</h2>
            </div>
          </PopupItem>
        </PopupGroup>
      </Popup>
    </>
  )
}

export default RenderPopupContent