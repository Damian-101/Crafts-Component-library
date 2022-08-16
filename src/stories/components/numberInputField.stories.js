import React from 'react';
import {NumberInputControl} from '../../components/common-components/number-input-control';
import Doc from './docs/NumberInputControl.mdx'
export default {
  component: NumberInputControl,
  title: 'components/Number Input Control',
  parameters:{
    docs:{
      page:Doc
    }
  },
};

const Template = args => <NumberInputControl {...args} />

export const Default = Template.bind({});
Default.args = {
  label:"Add Your Age",
  placeholder:"Add A Number",
  onChange:(value) => {
    console.log(value.target.value)
  },
};


export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  label:"Add Your Age",
  placeholder:"Add A Number",
  onChange:(e) => {
    console.log(e.target.value)
  },
  errMsg:"Value Is Not Valid",
  value:"101"
};