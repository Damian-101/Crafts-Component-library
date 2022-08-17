import React, { useState, useEffect } from 'react';
import {Dropdown,DropdownItem} from '../../components/dropdown';
// import DropdownItem from '../components/common-components/dropdown/child-components/dropdown-item';
import Doc from './docs/DropdownMdxDoc.mdx'
export default {
  title: 'components/Dropdown Control',
  component: Dropdown,
  // subcomponents: {'Dropdown.DropdownItem' : Dropdown.DropdownItem},
  parameters:{
    docs:{
      page:Doc
    }
  },
}

const Template = args => {
  const [value, setValue] = useState()
  const [isOpen, setisOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [postCount, setPostCount] = useState(0)

  useEffect(() => {
    if (!value) {
      setSelectedValue('Select Item')
    }
  }, [])

  return (
    <Dropdown
      {...args}
      value={selectedValue && selectedValue}
      onClick={() => {
        setisOpen(!isOpen)
      }}
      onBlur={() => {
        setisOpen(false)
      }}
      isOpen={isOpen}
      children={<DropdownItem
        onClick={(value) => {
          setSelectedValue(value)
        }}
      />}
    >
      {/* Add Dropdown Item Story */}
      <DropdownItem
        {...args}
        value="Item 1"
        onClick={(value) => {
          setSelectedValue(value)
        }}
      >
        <h2>Item 1</h2>
      </DropdownItem>
      <DropdownItem
        value="Item 2"
        onClick={(value) => {
          setSelectedValue(value)
        }}
      >
        <h2>Item 2</h2>
      </DropdownItem>
    </Dropdown>
  )
}


export const Default = Template.bind({});
Default.args = {
  label: "Select Posts",
  isOpen:false,
}

