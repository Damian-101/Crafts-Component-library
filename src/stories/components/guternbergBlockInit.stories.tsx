import React,{useState} from 'react';
import {GuternbergBlockConfig} from "../../components/guternberg/guternberg-block-config";
import Layout from "../../components/guternberg/guternberg-block-config/icons/icon.js"
import BlockConfigContent from './demo';
import BlockConfigContent2 from './demo2';
// @ts-ignore
import Doc from './docs/GuternbergBlockConfig.mdx'


export default {
  component: GuternbergBlockConfig,
  title: 'components/Guternberg/Guternberg Block Config',
  parameters:{
    docs:{
      page:Doc
    }
  },
};

const Template = args => <GuternbergBlockConfig {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Full Width Layout Block',
    description: `Select A Layout`,
    icon: <Layout />,
    children:<BlockConfigContent/>,
    isNotificationOpen:true,
    notificationText:'You Must Select Minimum 8 Posts',
    onNotificationClose:() => alert('closed')
};

export const Popup = Template.bind({});
Popup.args = {
    name: 'Full Width Layout Block',
    description: 'Click Show Popup',
    icon: <Layout />,
  children:<BlockConfigContent2/>,
};


export const isLoading = Template.bind({});
isLoading.args = {
    name: 'Full Width Layout Block',
    description: `Select A Item`,
    icon: <Layout />,
    children:<BlockConfigContent2/>,
    isLoading:true
};